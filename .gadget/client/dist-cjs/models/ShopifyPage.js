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
var ShopifyPage_exports = {};
__export(ShopifyPage_exports, {
  DefaultShopifyPageSelection: () => DefaultShopifyPageSelection,
  ShopifyPageManager: () => ShopifyPageManager
});
module.exports = __toCommonJS(ShopifyPage_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
const DefaultShopifyPageSelection = {
  "__typename": true,
  "author": true,
  "body": true,
  "createdAt": true,
  "handle": true,
  "id": true,
  "publishedAt": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "templateSuffix": true,
  "title": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyPage";
const pluralApiIdentifier = "shopifyPages";
class ShopifyPageManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyPage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyPage",
          id,
          DefaultShopifyPageSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyPage",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPageSelection
      }
    );
    /**
    * Finds one shopifyPage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyPage",
          id,
          DefaultShopifyPageSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyPage",
        modelApiIdentifier: "shopifyPage",
        defaultSelection: DefaultShopifyPageSelection
      }
    );
    /**
    * Finds many shopifyPage. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyPages",
          DefaultShopifyPageSelection,
          "shopifyPage",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyPages",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPageSelection
      }
    );
    /**
    * Finds the first matching shopifyPage. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyPages",
          DefaultShopifyPageSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyPages",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPageSelection
      }
    );
    /**
    * Finds the first matching shopifyPage. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyPages",
          DefaultShopifyPageSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyPages",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPageSelection
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyPageSelection,
  ShopifyPageManager
});
//# sourceMappingURL=ShopifyPage.js.map
