import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
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
        return await findOneRunner(
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
        const record = await findOneRunner(
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
        return await findManyRunner(
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
        const list = await findManyRunner(
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
        const list = await findManyRunner(
          this,
          "shopifyPages",
          DefaultShopifyPageSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
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
export {
  DefaultShopifyPageSelection,
  ShopifyPageManager
};
//# sourceMappingURL=ShopifyPage.js.map
