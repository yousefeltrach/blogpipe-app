import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyCommentSelection = {
  "__typename": true,
  "author": true,
  "body": true,
  "bodyHtml": true,
  "createdAt": true,
  "email": true,
  "id": true,
  "ip": true,
  "publishedAt": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "updatedAt": true,
  "userAgent": true
};
;
;
;
;
;
const apiIdentifier = "shopifyComment";
const pluralApiIdentifier = "shopifyComments";
class ShopifyCommentManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyComment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyComment",
          id,
          DefaultShopifyCommentSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyComment",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCommentSelection
      }
    );
    /**
    * Finds one shopifyComment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyComment",
          id,
          DefaultShopifyCommentSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyComment",
        modelApiIdentifier: "shopifyComment",
        defaultSelection: DefaultShopifyCommentSelection
      }
    );
    /**
    * Finds many shopifyComment. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyComments",
          DefaultShopifyCommentSelection,
          "shopifyComment",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyComments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCommentSelection
      }
    );
    /**
    * Finds the first matching shopifyComment. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyComments",
          DefaultShopifyCommentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyComments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCommentSelection
      }
    );
    /**
    * Finds the first matching shopifyComment. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyComments",
          DefaultShopifyCommentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyComments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCommentSelection
      }
    );
  }
}
export {
  DefaultShopifyCommentSelection,
  ShopifyCommentManager
};
//# sourceMappingURL=ShopifyComment.js.map
