import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyFileSelection = {
  "__typename": true,
  "alt": true,
  "createdAt": true,
  "duration": true,
  "fileErrors": true,
  "fileStatus": true,
  "id": true,
  "image": true,
  "originalFileSize": true,
  "originalSource": true,
  "preview": true,
  "shopifyCreatedAt": true,
  "sources": true,
  "type": true,
  "updatedAt": true,
  "url": true
};
;
;
;
;
;
const apiIdentifier = "shopifyFile";
const pluralApiIdentifier = "shopifyFiles";
class ShopifyFileManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyFile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyFile",
          id,
          DefaultShopifyFileSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFile",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFileSelection
      }
    );
    /**
    * Finds one shopifyFile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyFile",
          id,
          DefaultShopifyFileSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyFile",
        modelApiIdentifier: "shopifyFile",
        defaultSelection: DefaultShopifyFileSelection
      }
    );
    /**
    * Finds many shopifyFile. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyFiles",
          DefaultShopifyFileSelection,
          "shopifyFile",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyFiles",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFileSelection
      }
    );
    /**
    * Finds the first matching shopifyFile. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFiles",
          DefaultShopifyFileSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyFiles",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFileSelection
      }
    );
    /**
    * Finds the first matching shopifyFile. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFiles",
          DefaultShopifyFileSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyFiles",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFileSelection
      }
    );
  }
}
export {
  DefaultShopifyFileSelection,
  ShopifyFileManager
};
//# sourceMappingURL=ShopifyFile.js.map
