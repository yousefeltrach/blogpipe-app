import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyDiscountCodeSelection = {
  "__typename": true,
  "code": true,
  "createdAt": true,
  "id": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "updatedAt": true,
  "usageCount": true
};
;
;
;
;
;
const apiIdentifier = "shopifyDiscountCode";
const pluralApiIdentifier = "shopifyDiscountCodes";
class ShopifyDiscountCodeManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyDiscountCode by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyDiscountCode",
          id,
          DefaultShopifyDiscountCodeSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyDiscountCode",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountCodeSelection
      }
    );
    /**
    * Finds one shopifyDiscountCode by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyDiscountCode",
          id,
          DefaultShopifyDiscountCodeSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyDiscountCode",
        modelApiIdentifier: "shopifyDiscountCode",
        defaultSelection: DefaultShopifyDiscountCodeSelection
      }
    );
    /**
    * Finds many shopifyDiscountCode. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyDiscountCodes",
          DefaultShopifyDiscountCodeSelection,
          "shopifyDiscountCode",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyDiscountCodes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountCodeSelection
      }
    );
    /**
    * Finds the first matching shopifyDiscountCode. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDiscountCodes",
          DefaultShopifyDiscountCodeSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyDiscountCodes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountCodeSelection
      }
    );
    /**
    * Finds the first matching shopifyDiscountCode. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDiscountCodes",
          DefaultShopifyDiscountCodeSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyDiscountCodes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountCodeSelection
      }
    );
  }
}
export {
  DefaultShopifyDiscountCodeSelection,
  ShopifyDiscountCodeManager
};
//# sourceMappingURL=ShopifyDiscountCode.js.map
