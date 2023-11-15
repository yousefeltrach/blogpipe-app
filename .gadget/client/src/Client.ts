import type { OperationContext, Exchange } from "@urql/core";
import { pipe, map } from "wonka";
import { GadgetConnection, AuthenticationMode, GadgetTransaction, InternalModelManager } from "@gadgetinc/api-client-core";
import type { ClientOptions as ApiClientOptions, AnyClient } from '@gadgetinc/api-client-core';
import type { DocumentNode } from 'graphql';
import type {
  Scalars,
        Scalars,
} from "./types";
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

type InternalModelManagers = {
  blogPipeAds: InternalModelManager;
  shopifyArticle: InternalModelManager;
  shopifyBlog: InternalModelManager;
  shopifyCollect: InternalModelManager;
  shopifyCollection: InternalModelManager;
  shopifyComment: InternalModelManager;
  shopifyDiscount: InternalModelManager;
  shopifyDiscountCode: InternalModelManager;
  shopifyEvent: InternalModelManager;
  shopifyFile: InternalModelManager;
  shopifyGdprRequest: InternalModelManager;
  shopifyInventoryItem: InternalModelManager;
  shopifyInventoryLevel: InternalModelManager;
  shopifyLocation: InternalModelManager;
  shopifyPage: InternalModelManager;
  shopifyPriceRule: InternalModelManager;
  shopifyProduct: InternalModelManager;
  shopifyProductImage: InternalModelManager;
  shopifyProductOption: InternalModelManager;
  shopifyProductVariant: InternalModelManager;
  shopifyRedirect: InternalModelManager;
  shopifyShop: InternalModelManager;
  shopifySync: InternalModelManager;
  blogPipeArticle: InternalModelManager;
  session: InternalModelManager;
  blogPipeTopics: InternalModelManager;
};

type ClientOptions = Omit<ApiClientOptions, "environment"> & { environment?: string };
const productionEnv = "production";
const developmentEnv = "development";

/**
 * Return the implicit environment
 * We specifically use the string `process.env.NODE_ENV` so that bundlers like webpack or vite can string replace this value in built source codes with the user's desired value.
 * In browsers or other environments, `process` may be undefined, so we catch any errors and return undefined.
 */
const getImplicitEnv = () => {
  try {
    return process.env.NODE_ENV
  } catch (error) {
    return undefined;
  }
}

/**
 * Root object used for interacting with the "Y Blogpipe Develop" API. `Client` has `query` and `mutation` functions for executing raw GraphQL queries and mutations, as well as `ModelManager` objects for manipulating models with a JavaScript API. Client also wraps a `connection`, which implements the transport layer if you need access to that.
 * */
export class Client implements AnyClient {
  connection: GadgetConnection;

  blogPipeAds: BlogPipeAdsManager;
  shopifyArticle: ShopifyArticleManager;
  shopifyBlog: ShopifyBlogManager;
  shopifyCollect: ShopifyCollectManager;
  shopifyCollection: ShopifyCollectionManager;
  shopifyComment: ShopifyCommentManager;
  shopifyDiscount: ShopifyDiscountManager;
  shopifyDiscountCode: ShopifyDiscountCodeManager;
  shopifyEvent: ShopifyEventManager;
  shopifyFile: ShopifyFileManager;
  shopifyGdprRequest: ShopifyGdprRequestManager;
  shopifyInventoryItem: ShopifyInventoryItemManager;
  shopifyInventoryLevel: ShopifyInventoryLevelManager;
  shopifyLocation: ShopifyLocationManager;
  shopifyPage: ShopifyPageManager;
  shopifyPriceRule: ShopifyPriceRuleManager;
  shopifyProduct: ShopifyProductManager;
  shopifyProductImage: ShopifyProductImageManager;
  shopifyProductOption: ShopifyProductOptionManager;
  shopifyProductVariant: ShopifyProductVariantManager;
  shopifyRedirect: ShopifyRedirectManager;
  shopifyShop: ShopifyShopManager;
  shopifySync: ShopifySyncManager;
  blogPipeArticle: BlogPipeArticleManager;
  session: SessionManager;
  blogPipeTopics: BlogPipeTopicsManager;
  currentSession: CurrentSessionManager;

  /**
  * Namespaced object for accessing models via the Gadget internal APIs, which provide lower level and higher privileged operations directly against the database. Useful for maintenance operations like migrations or correcting broken data, and for implementing the high level actions.
  *
  * Returns an object of model API identifiers to `InternalModelManager` objects.
  *
  * Example:
  * `api.internal.user.findOne(...)`
  */
  internal: InternalModelManagers;

  developmentApiRoot = "https://y-blogpipe-develop--development.gadget.app/";
  productionApiRoot = "https://y-blogpipe-develop.gadget.app/";
  applicationId = "64235";

  constructor(options?: ClientOptions) {
    const environment = options?.environment ?? getImplicitEnv() ?? developmentEnv;
    let normalizedEnvironment = environment.toLocaleLowerCase();

    if (normalizedEnvironment != developmentEnv && normalizedEnvironment != productionEnv) {
      console.warn("Invalid environment", environment, "defaulting to development");
      normalizedEnvironment = developmentEnv;
    }

    const exchanges = {...options?.exchanges};

    if (normalizedEnvironment === developmentEnv) {
      const devHarnessExchange: Exchange = ({ forward }) => {
        return operations$ => {
          const operationResult$ = forward(operations$)

          return pipe(
            operationResult$,
            map(result => {
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
        ...(exchanges.beforeAll ?? []),
      ];
    }

    this.connection = new GadgetConnection({
      endpoint: new URL("api/graphql", normalizedEnvironment == productionEnv ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: options?.authenticationMode ?? (typeof window == 'undefined' ? { anonymous: true } : { browserSession: true }),
      ...options,
      exchanges,
      environment: normalizedEnvironment == productionEnv ? "Production" : "Development"
    });

    if (typeof window != 'undefined' && this.connection.authenticationMode == AuthenticationMode.APIKey && !(options as any)?.authenticationMode?.dangerouslyAllowBrowserApiKey) {
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.")

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
	      hasAmbiguousIdentifier: false,
      }),
      shopifyArticle: new InternalModelManager("shopifyArticle", this.connection, {
      	pluralApiIdentifier: "shopifyArticles",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyBlog: new InternalModelManager("shopifyBlog", this.connection, {
      	pluralApiIdentifier: "shopifyBlogs",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyCollect: new InternalModelManager("shopifyCollect", this.connection, {
      	pluralApiIdentifier: "shopifyCollects",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyCollection: new InternalModelManager("shopifyCollection", this.connection, {
      	pluralApiIdentifier: "shopifyCollections",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyComment: new InternalModelManager("shopifyComment", this.connection, {
      	pluralApiIdentifier: "shopifyComments",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyDiscount: new InternalModelManager("shopifyDiscount", this.connection, {
      	pluralApiIdentifier: "shopifyDiscounts",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyDiscountCode: new InternalModelManager("shopifyDiscountCode", this.connection, {
      	pluralApiIdentifier: "shopifyDiscountCodes",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyEvent: new InternalModelManager("shopifyEvent", this.connection, {
      	pluralApiIdentifier: "shopifyEvents",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyFile: new InternalModelManager("shopifyFile", this.connection, {
      	pluralApiIdentifier: "shopifyFiles",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyGdprRequest: new InternalModelManager("shopifyGdprRequest", this.connection, {
      	pluralApiIdentifier: "shopifyGdprRequests",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyInventoryItem: new InternalModelManager("shopifyInventoryItem", this.connection, {
      	pluralApiIdentifier: "shopifyInventoryItems",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyInventoryLevel: new InternalModelManager("shopifyInventoryLevel", this.connection, {
      	pluralApiIdentifier: "shopifyInventoryLevels",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyLocation: new InternalModelManager("shopifyLocation", this.connection, {
      	pluralApiIdentifier: "shopifyLocations",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyPage: new InternalModelManager("shopifyPage", this.connection, {
      	pluralApiIdentifier: "shopifyPages",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyPriceRule: new InternalModelManager("shopifyPriceRule", this.connection, {
      	pluralApiIdentifier: "shopifyPriceRules",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyProduct: new InternalModelManager("shopifyProduct", this.connection, {
      	pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyProductImage: new InternalModelManager("shopifyProductImage", this.connection, {
      	pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyProductOption: new InternalModelManager("shopifyProductOption", this.connection, {
      	pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyProductVariant: new InternalModelManager("shopifyProductVariant", this.connection, {
      	pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyRedirect: new InternalModelManager("shopifyRedirect", this.connection, {
      	pluralApiIdentifier: "shopifyRedirects",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifyShop: new InternalModelManager("shopifyShop", this.connection, {
      	pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      shopifySync: new InternalModelManager("shopifySync", this.connection, {
      	pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      blogPipeArticle: new InternalModelManager("blogPipeArticle", this.connection, {
      	pluralApiIdentifier: "blogPipeArticles",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      session: new InternalModelManager("session", this.connection, {
      	pluralApiIdentifier: "sessions",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
      blogPipeTopics: new InternalModelManager("blogPipeTopics", this.connection, {
      	pluralApiIdentifier: "blogPipeTopicss",
        // @ts-ignore
	      hasAmbiguousIdentifier: false,
      }),
    };
  }


  /** Executes the globalShopifySync global action. */
globalShopifySync: {
  (
    variables: {
            apiKeys?: ((Scalars['String'] | null))[];
            syncSince?: Date | Scalars['ISO8601DateString'] | null;
            models?: ((Scalars['String'] | null))[];
            force?: (Scalars['Boolean'] | null) | null;
            startReason?: (Scalars['String'] | null) | null;
          }
  ): Promise<any>;
  type: "globalAction",
  operationName: "globalShopifySync",
  namespace: null,
  variablesType: {
    apiKeys?: ((Scalars['String'] | null))[];
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    models?: ((Scalars['String'] | null))[];
    force?: (Scalars['Boolean'] | null) | null;
    startReason?: (Scalars['String'] | null) | null;
  } | undefined;
  variables: {
    "apiKeys": {
      required: false;
      type: "[String!]";
    },
    "syncSince": {
      required: false;
      type: "DateTime";
    },
    "models": {
      required: false;
      type: "[String!]";
    },
    "force": {
      required: false;
      type: "Boolean";
    },
    "startReason": {
      required: false;
      type: "String";
    },
  }
} = Object.assign(
  async (
    variables: {
            apiKeys?: ((Scalars['String'] | null))[],
            syncSince?: Date | Scalars['ISO8601DateString'] | null,
            models?: ((Scalars['String'] | null))[],
            force?: (Scalars['Boolean'] | null) | null,
            startReason?: (Scalars['String'] | null) | null,
          },
  ): Promise<any> => {
    return (await globalActionRunner(
      this.connection,
      "globalShopifySync",
      {
        "apiKeys": {
          value: variables.apiKeys,
          required: false,
          type: "[String!]",
        },
        "syncSince": {
          value: variables.syncSince,
          required: false,
          type: "DateTime",
        },
        "models": {
          value: variables.models,
          required: false,
          type: "[String!]",
        },
        "force": {
          value: variables.force,
          required: false,
          type: "Boolean",
        },
        "startReason": {
          value: variables.startReason,
          required: false,
          type: "String",
        },
      },
      null
    ));
  },
  {
    type: "globalAction",
    operationName: "globalShopifySync",
    namespace: null,
    variables: {
          "apiKeys": {
        required: false,
        type: "[String!]",
      },
          "syncSince": {
        required: false,
        type: "DateTime",
      },
          "models": {
        required: false,
        type: "[String!]",
      },
          "force": {
        required: false,
        type: "Boolean",
      },
          "startReason": {
        required: false,
        type: "String",
      },
        },
  } as any
);



  /** Run an arbitrary GraphQL query. */
  async query(graphQL: string | DocumentNode, variables?: Record<string, any>, options?: Partial<OperationContext>) {
    const {data, error} = await this.connection.currentClient.query(graphQL, variables, options).toPromise();
    if (error) throw error
    return data;
  }

  /** Run an arbitrary GraphQL mutation. */
  async mutate(graphQL: string | DocumentNode, variables?: Record<string, any>) {
    const {data, error} = await this.connection.currentClient.mutation(graphQL, variables).toPromise();
    if (error) throw error
    return data;
  }

  /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
  transaction = async <T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T> => {
    return await this.connection.transaction(callback)
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
  async fetch(input: RequestInfo | URL, init: RequestInit = {}) {
    return await this.connection.fetch(input, init);
  }

  /**
  * Get a new direct upload token for file uploads to directly to cloud storage.
  * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
  * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
  */
  getDirectUploadToken = async (): Promise<{url: string, token: string}> => {
    const result = await this.query(`query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }`, {nonce: Math.random().toString(36).slice(2, 7)}, {
      requestPolicy: "network-only",
    });
    return result.gadgetMeta.directUploadToken;
  }

  toString() {
    return `GadgetAPIClient<${this.productionApiRoot}>`;
  }

  toJSON() {
    return this.toString()
  }
}
