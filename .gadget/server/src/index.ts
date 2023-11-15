/**
* This is the Gadget server side types library for:
*
*  __   __  ____  _                   _              ____                 _             
*  \ \ / / | __ )| | ___   __ _ _ __ (_)_ __   ___  |  _ \  _____   _____| | ___  _ __  
*   \ V /  |  _ \| |/ _ \ / _` | '_ \| | '_ \ / _ \ | | | |/ _ \ \ / / _ \ |/ _ \| '_ \ 
*    | |   | |_) | | (_) | (_| | |_) | | |_) |  __/ | |_| |  __/\ V /  __/ | (_) | |_) |
*    |_|   |____/|_|\___/ \__, | .__/|_| .__/ \___| |____/ \___| \_/ \___|_|\___/| .__/ 
*                         |___/|_|     |_|                                       |_|    
*
* Built for environment `Development` at version 6314
* Framework version: ^0.2.0
* Edit this app here: https://y-blogpipe-develop.gadget.dev/edit
*/
import type { Client } from "@gadget-client/y-blogpipe-develop";
import { FastifyLoggerInstance } from "fastify";

export * from "./AccessControlMetadata";
export * from "./AmbientContext";
export * from "./AppConfigs";
export * from "./AppConfiguration";
export * from "./AppConnections";
export * from "./effects";
export * as DefaultEmailTemplates from "./email-templates";
export * from "./emails";
export { InvalidStateTransitionError } from "./errors";
export * from "./global-actions";
export * from "./routes";
export * from "./state-chart";
export * from "./types";
/**
 * @internal
 */
import { Globals, actionContextLocalStorage } from "./globals";
export * from "./models/BlogPipeAds";
export * from "./models/ShopifyArticle";
export * from "./models/ShopifyBlog";
export * from "./models/ShopifyCollect";
export * from "./models/ShopifyCollection";
export * from "./models/ShopifyComment";
export * from "./models/ShopifyDiscount";
export * from "./models/ShopifyDiscountCode";
export * from "./models/ShopifyEvent";
export * from "./models/ShopifyFile";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyInventoryItem";
export * from "./models/ShopifyInventoryLevel";
export * from "./models/ShopifyLocation";
export * from "./models/ShopifyPage";
export * from "./models/ShopifyPriceRule";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifyProductImage";
export * from "./models/ShopifyProductOption";
export * from "./models/ShopifyProductVariant";
export * from "./models/ShopifyRedirect";
export * from "./models/ShopifyShop";
export * from "./models/ShopifySync";
export * from "./models/BlogPipeArticle";
export * from "./models/Session";
export * from "./models/BlogPipeTopics";
export * from "./auth";

/**
 * An instance of the Gadget logger
 */
let logger: FastifyLoggerInstance;
/**
 * An instance of the Gadget API client that has admin permissions
 */
let api: Client;

/**
 * This is used internally to set the rootLogger.
 * @internal
 */
export const setLogger = (rootLogger: FastifyLoggerInstance) => {
  Globals.logger = rootLogger;
  logger = rootLogger;
};

/**
 * This is used internally to set the client Instance
 * @internal
 */
export const setApiClient = (client: Client) => {
  api = client;
}

export {
  api, logger
};

/**
 * @internal
 */
export {
  Globals,
  actionContextLocalStorage
};
