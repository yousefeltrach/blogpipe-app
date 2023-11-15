import { pipe, map } from "wonka";
import { GadgetConnection, AuthenticationMode, InternalModelManager } from "@gadgetinc/api-client-core";
import { BlogPipeAdsManager } from "./models/BlogPipeAds.js";
import { ShopifyArticleManager } from "./models/ShopifyArticle.js";
import { ShopifyBlogManager } from "./models/ShopifyBlog.js";
import { ShopifyCollectManager } from "./models/ShopifyCollect.js";
import { ShopifyCollectionManager } from "./models/ShopifyCollection.js";
import { ShopifyCommentManager } from "./models/ShopifyComment.js";
import { ShopifyDiscountManager } from "./models/ShopifyDiscount.js";
import { ShopifyDiscountCodeManager } from "./models/ShopifyDiscountCode.js";
import { ShopifyEventManager } from "./models/ShopifyEvent.js";
import { ShopifyFileManager } from "./models/ShopifyFile.js";
import { ShopifyGdprRequestManager } from "./models/ShopifyGdprRequest.js";
import { ShopifyInventoryItemManager } from "./models/ShopifyInventoryItem.js";
import { ShopifyInventoryLevelManager } from "./models/ShopifyInventoryLevel.js";
import { ShopifyLocationManager } from "./models/ShopifyLocation.js";
import { ShopifyPageManager } from "./models/ShopifyPage.js";
import { ShopifyPriceRuleManager } from "./models/ShopifyPriceRule.js";
import { ShopifyProductManager } from "./models/ShopifyProduct.js";
import { ShopifyProductImageManager } from "./models/ShopifyProductImage.js";
import { ShopifyProductOptionManager } from "./models/ShopifyProductOption.js";
import { ShopifyProductVariantManager } from "./models/ShopifyProductVariant.js";
import { ShopifyRedirectManager } from "./models/ShopifyRedirect.js";
import { ShopifyShopManager } from "./models/ShopifyShop.js";
import { ShopifySyncManager } from "./models/ShopifySync.js";
import { BlogPipeArticleManager } from "./models/BlogPipeArticle.js";
import { SessionManager } from "./models/Session.js";
import { BlogPipeTopicsManager } from "./models/BlogPipeTopics.js";
import { CurrentSessionManager } from "./models/CurrentSession.js";
import { globalActionRunner } from "@gadgetinc/api-client-core";
const productionEnv = "production";
const developmentEnv = "development";
const getImplicitEnv = () => {
  try {
    return process.env.NODE_ENV;
  } catch (error) {
    return void 0;
  }
};
class Client {
  constructor(options) {
    this.developmentApiRoot = "https://y-blogpipe-develop--development.gadget.app/";
    this.productionApiRoot = "https://y-blogpipe-develop.gadget.app/";
    this.applicationId = "64235";
    /** Executes the globalShopifySync global action. */
    this.globalShopifySync = Object.assign(
      async (variables) => {
        return await globalActionRunner(
          this.connection,
          "globalShopifySync",
          {
            "apiKeys": {
              value: variables.apiKeys,
              required: false,
              type: "[String!]"
            },
            "syncSince": {
              value: variables.syncSince,
              required: false,
              type: "DateTime"
            },
            "models": {
              value: variables.models,
              required: false,
              type: "[String!]"
            },
            "force": {
              value: variables.force,
              required: false,
              type: "Boolean"
            },
            "startReason": {
              value: variables.startReason,
              required: false,
              type: "String"
            }
          },
          null
        );
      },
      {
        type: "globalAction",
        operationName: "globalShopifySync",
        namespace: null,
        variables: {
          "apiKeys": {
            required: false,
            type: "[String!]"
          },
          "syncSince": {
            required: false,
            type: "DateTime"
          },
          "models": {
            required: false,
            type: "[String!]"
          },
          "force": {
            required: false,
            type: "Boolean"
          },
          "startReason": {
            required: false,
            type: "String"
          }
        }
      }
    );
    /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
    this.transaction = async (callback) => {
      return await this.connection.transaction(callback);
    };
    /**
    * Get a new direct upload token for file uploads to directly to cloud storage.
    * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
    * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
    */
    this.getDirectUploadToken = async () => {
      const result = await this.query(`query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }`, { nonce: Math.random().toString(36).slice(2, 7) }, {
        requestPolicy: "network-only"
      });
      return result.gadgetMeta.directUploadToken;
    };
    const environment = options?.environment ?? getImplicitEnv() ?? developmentEnv;
    let normalizedEnvironment = environment.toLocaleLowerCase();
    if (normalizedEnvironment != developmentEnv && normalizedEnvironment != productionEnv) {
      console.warn("Invalid environment", environment, "defaulting to development");
      normalizedEnvironment = developmentEnv;
    }
    const exchanges = { ...options?.exchanges };
    if (normalizedEnvironment === developmentEnv) {
      const devHarnessExchange = ({ forward }) => {
        return (operations$) => {
          const operationResult$ = forward(operations$);
          return pipe(
            operationResult$,
            map((result) => {
              if (typeof window !== "undefined" && typeof CustomEvent === "function") {
                const event = new CustomEvent("gadget:devharness:graphqlresult", { detail: result });
                window.dispatchEvent(event);
              }
              return result;
            })
          );
        };
      };
      exchanges.beforeAll = [
        devHarnessExchange,
        ...exchanges.beforeAll ?? []
      ];
    }
    this.connection = new GadgetConnection({
      endpoint: new URL("api/graphql", normalizedEnvironment == productionEnv ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: options?.authenticationMode ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true }),
      ...options,
      exchanges,
      environment: normalizedEnvironment == productionEnv ? "Production" : "Development"
    });
    if (typeof window != "undefined" && this.connection.authenticationMode == AuthenticationMode.APIKey && !options?.authenticationMode?.dangerouslyAllowBrowserApiKey) {
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    }
    this.blogPipeAds = new BlogPipeAdsManager(this.connection);
    this.shopifyArticle = new ShopifyArticleManager(this.connection);
    this.shopifyBlog = new ShopifyBlogManager(this.connection);
    this.shopifyCollect = new ShopifyCollectManager(this.connection);
    this.shopifyCollection = new ShopifyCollectionManager(this.connection);
    this.shopifyComment = new ShopifyCommentManager(this.connection);
    this.shopifyDiscount = new ShopifyDiscountManager(this.connection);
    this.shopifyDiscountCode = new ShopifyDiscountCodeManager(this.connection);
    this.shopifyEvent = new ShopifyEventManager(this.connection);
    this.shopifyFile = new ShopifyFileManager(this.connection);
    this.shopifyGdprRequest = new ShopifyGdprRequestManager(this.connection);
    this.shopifyInventoryItem = new ShopifyInventoryItemManager(this.connection);
    this.shopifyInventoryLevel = new ShopifyInventoryLevelManager(this.connection);
    this.shopifyLocation = new ShopifyLocationManager(this.connection);
    this.shopifyPage = new ShopifyPageManager(this.connection);
    this.shopifyPriceRule = new ShopifyPriceRuleManager(this.connection);
    this.shopifyProduct = new ShopifyProductManager(this.connection);
    this.shopifyProductImage = new ShopifyProductImageManager(this.connection);
    this.shopifyProductOption = new ShopifyProductOptionManager(this.connection);
    this.shopifyProductVariant = new ShopifyProductVariantManager(this.connection);
    this.shopifyRedirect = new ShopifyRedirectManager(this.connection);
    this.shopifyShop = new ShopifyShopManager(this.connection);
    this.shopifySync = new ShopifySyncManager(this.connection);
    this.blogPipeArticle = new BlogPipeArticleManager(this.connection);
    this.session = new SessionManager(this.connection);
    this.blogPipeTopics = new BlogPipeTopicsManager(this.connection);
    this.currentSession = new CurrentSessionManager(this.connection);
    this.internal = {
      blogPipeAds: new InternalModelManager("blogPipeAds", this.connection, {
        pluralApiIdentifier: "blogPipeAdss",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyArticle: new InternalModelManager("shopifyArticle", this.connection, {
        pluralApiIdentifier: "shopifyArticles",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyBlog: new InternalModelManager("shopifyBlog", this.connection, {
        pluralApiIdentifier: "shopifyBlogs",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCollect: new InternalModelManager("shopifyCollect", this.connection, {
        pluralApiIdentifier: "shopifyCollects",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCollection: new InternalModelManager("shopifyCollection", this.connection, {
        pluralApiIdentifier: "shopifyCollections",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyComment: new InternalModelManager("shopifyComment", this.connection, {
        pluralApiIdentifier: "shopifyComments",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDiscount: new InternalModelManager("shopifyDiscount", this.connection, {
        pluralApiIdentifier: "shopifyDiscounts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDiscountCode: new InternalModelManager("shopifyDiscountCode", this.connection, {
        pluralApiIdentifier: "shopifyDiscountCodes",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyEvent: new InternalModelManager("shopifyEvent", this.connection, {
        pluralApiIdentifier: "shopifyEvents",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFile: new InternalModelManager("shopifyFile", this.connection, {
        pluralApiIdentifier: "shopifyFiles",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyGdprRequest: new InternalModelManager("shopifyGdprRequest", this.connection, {
        pluralApiIdentifier: "shopifyGdprRequests",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyInventoryItem: new InternalModelManager("shopifyInventoryItem", this.connection, {
        pluralApiIdentifier: "shopifyInventoryItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyInventoryLevel: new InternalModelManager("shopifyInventoryLevel", this.connection, {
        pluralApiIdentifier: "shopifyInventoryLevels",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyLocation: new InternalModelManager("shopifyLocation", this.connection, {
        pluralApiIdentifier: "shopifyLocations",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyPage: new InternalModelManager("shopifyPage", this.connection, {
        pluralApiIdentifier: "shopifyPages",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyPriceRule: new InternalModelManager("shopifyPriceRule", this.connection, {
        pluralApiIdentifier: "shopifyPriceRules",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProduct: new InternalModelManager("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProductImage: new InternalModelManager("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProductOption: new InternalModelManager("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProductVariant: new InternalModelManager("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRedirect: new InternalModelManager("shopifyRedirect", this.connection, {
        pluralApiIdentifier: "shopifyRedirects",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyShop: new InternalModelManager("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySync: new InternalModelManager("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      blogPipeArticle: new InternalModelManager("blogPipeArticle", this.connection, {
        pluralApiIdentifier: "blogPipeArticles",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      session: new InternalModelManager("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      blogPipeTopics: new InternalModelManager("blogPipeTopics", this.connection, {
        pluralApiIdentifier: "blogPipeTopicss",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(graphQL, variables, options) {
    const { data, error } = await this.connection.currentClient.query(graphQL, variables, options).toPromise();
    if (error)
      throw error;
    return data;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(graphQL, variables) {
    const { data, error } = await this.connection.currentClient.mutation(graphQL, variables).toPromise();
    if (error)
      throw error;
    return data;
  }
  /**
   * `fetch` function that works the same as the built-in `fetch` function, but automatically passes authentication information for this API client.
   *
   * @example
   * await api.fetch("https://myapp--development.gadget.app/foo/bar");
   *
   * @example
   * // fetch a relative URL from the endpoint this API client is configured to fetch from
   * await api.fetch("/foo/bar");
   **/
  async fetch(input, init = {}) {
    return await this.connection.fetch(input, init);
  }
  toString() {
    return `GadgetAPIClient<${this.productionApiRoot}>`;
  }
  toJSON() {
    return this.toString();
  }
}
export {
  Client
};
//# sourceMappingURL=Client.js.map
