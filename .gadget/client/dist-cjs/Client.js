"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Client_exports = {};
__export(Client_exports, {
  Client: () => Client
});
module.exports = __toCommonJS(Client_exports);
var import_wonka = require("wonka");
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_BlogPipeAds = require("./models/BlogPipeAds.js");
var import_ShopifyArticle = require("./models/ShopifyArticle.js");
var import_ShopifyBlog = require("./models/ShopifyBlog.js");
var import_ShopifyCollect = require("./models/ShopifyCollect.js");
var import_ShopifyCollection = require("./models/ShopifyCollection.js");
var import_ShopifyComment = require("./models/ShopifyComment.js");
var import_ShopifyDiscount = require("./models/ShopifyDiscount.js");
var import_ShopifyDiscountCode = require("./models/ShopifyDiscountCode.js");
var import_ShopifyEvent = require("./models/ShopifyEvent.js");
var import_ShopifyFile = require("./models/ShopifyFile.js");
var import_ShopifyGdprRequest = require("./models/ShopifyGdprRequest.js");
var import_ShopifyInventoryItem = require("./models/ShopifyInventoryItem.js");
var import_ShopifyInventoryLevel = require("./models/ShopifyInventoryLevel.js");
var import_ShopifyLocation = require("./models/ShopifyLocation.js");
var import_ShopifyPage = require("./models/ShopifyPage.js");
var import_ShopifyPriceRule = require("./models/ShopifyPriceRule.js");
var import_ShopifyProduct = require("./models/ShopifyProduct.js");
var import_ShopifyProductImage = require("./models/ShopifyProductImage.js");
var import_ShopifyProductOption = require("./models/ShopifyProductOption.js");
var import_ShopifyProductVariant = require("./models/ShopifyProductVariant.js");
var import_ShopifyRedirect = require("./models/ShopifyRedirect.js");
var import_ShopifyShop = require("./models/ShopifyShop.js");
var import_ShopifySync = require("./models/ShopifySync.js");
var import_BlogPipeArticle = require("./models/BlogPipeArticle.js");
var import_Session = require("./models/Session.js");
var import_BlogPipeTopics = require("./models/BlogPipeTopics.js");
var import_CurrentSession = require("./models/CurrentSession.js");
var import_api_client_core2 = require("@gadgetinc/api-client-core");
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
        return await (0, import_api_client_core2.globalActionRunner)(
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
    var _a;
    const environment = (options == null ? void 0 : options.environment) ?? getImplicitEnv() ?? developmentEnv;
    let normalizedEnvironment = environment.toLocaleLowerCase();
    if (normalizedEnvironment != developmentEnv && normalizedEnvironment != productionEnv) {
      console.warn("Invalid environment", environment, "defaulting to development");
      normalizedEnvironment = developmentEnv;
    }
    const exchanges = { ...options == null ? void 0 : options.exchanges };
    if (normalizedEnvironment === developmentEnv) {
      const devHarnessExchange = ({ forward }) => {
        return (operations$) => {
          const operationResult$ = forward(operations$);
          return (0, import_wonka.pipe)(
            operationResult$,
            (0, import_wonka.map)((result) => {
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
    this.connection = new import_api_client_core.GadgetConnection({
      endpoint: new URL("api/graphql", normalizedEnvironment == productionEnv ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (options == null ? void 0 : options.authenticationMode) ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true }),
      ...options,
      exchanges,
      environment: normalizedEnvironment == productionEnv ? "Production" : "Development"
    });
    if (typeof window != "undefined" && this.connection.authenticationMode == import_api_client_core.AuthenticationMode.APIKey && !((_a = options == null ? void 0 : options.authenticationMode) == null ? void 0 : _a.dangerouslyAllowBrowserApiKey)) {
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    }
    this.blogPipeAds = new import_BlogPipeAds.BlogPipeAdsManager(this.connection);
    this.shopifyArticle = new import_ShopifyArticle.ShopifyArticleManager(this.connection);
    this.shopifyBlog = new import_ShopifyBlog.ShopifyBlogManager(this.connection);
    this.shopifyCollect = new import_ShopifyCollect.ShopifyCollectManager(this.connection);
    this.shopifyCollection = new import_ShopifyCollection.ShopifyCollectionManager(this.connection);
    this.shopifyComment = new import_ShopifyComment.ShopifyCommentManager(this.connection);
    this.shopifyDiscount = new import_ShopifyDiscount.ShopifyDiscountManager(this.connection);
    this.shopifyDiscountCode = new import_ShopifyDiscountCode.ShopifyDiscountCodeManager(this.connection);
    this.shopifyEvent = new import_ShopifyEvent.ShopifyEventManager(this.connection);
    this.shopifyFile = new import_ShopifyFile.ShopifyFileManager(this.connection);
    this.shopifyGdprRequest = new import_ShopifyGdprRequest.ShopifyGdprRequestManager(this.connection);
    this.shopifyInventoryItem = new import_ShopifyInventoryItem.ShopifyInventoryItemManager(this.connection);
    this.shopifyInventoryLevel = new import_ShopifyInventoryLevel.ShopifyInventoryLevelManager(this.connection);
    this.shopifyLocation = new import_ShopifyLocation.ShopifyLocationManager(this.connection);
    this.shopifyPage = new import_ShopifyPage.ShopifyPageManager(this.connection);
    this.shopifyPriceRule = new import_ShopifyPriceRule.ShopifyPriceRuleManager(this.connection);
    this.shopifyProduct = new import_ShopifyProduct.ShopifyProductManager(this.connection);
    this.shopifyProductImage = new import_ShopifyProductImage.ShopifyProductImageManager(this.connection);
    this.shopifyProductOption = new import_ShopifyProductOption.ShopifyProductOptionManager(this.connection);
    this.shopifyProductVariant = new import_ShopifyProductVariant.ShopifyProductVariantManager(this.connection);
    this.shopifyRedirect = new import_ShopifyRedirect.ShopifyRedirectManager(this.connection);
    this.shopifyShop = new import_ShopifyShop.ShopifyShopManager(this.connection);
    this.shopifySync = new import_ShopifySync.ShopifySyncManager(this.connection);
    this.blogPipeArticle = new import_BlogPipeArticle.BlogPipeArticleManager(this.connection);
    this.session = new import_Session.SessionManager(this.connection);
    this.blogPipeTopics = new import_BlogPipeTopics.BlogPipeTopicsManager(this.connection);
    this.currentSession = new import_CurrentSession.CurrentSessionManager(this.connection);
    this.internal = {
      blogPipeAds: new import_api_client_core.InternalModelManager("blogPipeAds", this.connection, {
        pluralApiIdentifier: "blogPipeAdss",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyArticle: new import_api_client_core.InternalModelManager("shopifyArticle", this.connection, {
        pluralApiIdentifier: "shopifyArticles",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyBlog: new import_api_client_core.InternalModelManager("shopifyBlog", this.connection, {
        pluralApiIdentifier: "shopifyBlogs",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCollect: new import_api_client_core.InternalModelManager("shopifyCollect", this.connection, {
        pluralApiIdentifier: "shopifyCollects",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCollection: new import_api_client_core.InternalModelManager("shopifyCollection", this.connection, {
        pluralApiIdentifier: "shopifyCollections",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyComment: new import_api_client_core.InternalModelManager("shopifyComment", this.connection, {
        pluralApiIdentifier: "shopifyComments",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDiscount: new import_api_client_core.InternalModelManager("shopifyDiscount", this.connection, {
        pluralApiIdentifier: "shopifyDiscounts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDiscountCode: new import_api_client_core.InternalModelManager("shopifyDiscountCode", this.connection, {
        pluralApiIdentifier: "shopifyDiscountCodes",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyEvent: new import_api_client_core.InternalModelManager("shopifyEvent", this.connection, {
        pluralApiIdentifier: "shopifyEvents",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFile: new import_api_client_core.InternalModelManager("shopifyFile", this.connection, {
        pluralApiIdentifier: "shopifyFiles",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyGdprRequest: new import_api_client_core.InternalModelManager("shopifyGdprRequest", this.connection, {
        pluralApiIdentifier: "shopifyGdprRequests",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyInventoryItem: new import_api_client_core.InternalModelManager("shopifyInventoryItem", this.connection, {
        pluralApiIdentifier: "shopifyInventoryItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyInventoryLevel: new import_api_client_core.InternalModelManager("shopifyInventoryLevel", this.connection, {
        pluralApiIdentifier: "shopifyInventoryLevels",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyLocation: new import_api_client_core.InternalModelManager("shopifyLocation", this.connection, {
        pluralApiIdentifier: "shopifyLocations",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyPage: new import_api_client_core.InternalModelManager("shopifyPage", this.connection, {
        pluralApiIdentifier: "shopifyPages",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyPriceRule: new import_api_client_core.InternalModelManager("shopifyPriceRule", this.connection, {
        pluralApiIdentifier: "shopifyPriceRules",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProduct: new import_api_client_core.InternalModelManager("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProductImage: new import_api_client_core.InternalModelManager("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProductOption: new import_api_client_core.InternalModelManager("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProductVariant: new import_api_client_core.InternalModelManager("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRedirect: new import_api_client_core.InternalModelManager("shopifyRedirect", this.connection, {
        pluralApiIdentifier: "shopifyRedirects",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyShop: new import_api_client_core.InternalModelManager("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySync: new import_api_client_core.InternalModelManager("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      blogPipeArticle: new import_api_client_core.InternalModelManager("blogPipeArticle", this.connection, {
        pluralApiIdentifier: "blogPipeArticles",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      session: new import_api_client_core.InternalModelManager("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      blogPipeTopics: new import_api_client_core.InternalModelManager("blogPipeTopics", this.connection, {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Client
});
//# sourceMappingURL=Client.js.map
