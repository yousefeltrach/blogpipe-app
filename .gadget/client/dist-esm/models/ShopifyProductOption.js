import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyProductOptionSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "position": true,
  "updatedAt": true,
  "values": true
};
;
;
;
;
;
const apiIdentifier = "shopifyProductOption";
const pluralApiIdentifier = "shopifyProductOptions";
class ShopifyProductOptionManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyProductOption by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyProductOption",
          id,
          DefaultShopifyProductOptionSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductOptionSelection
      }
    );
    /**
    * Finds one shopifyProductOption by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyProductOption",
          id,
          DefaultShopifyProductOptionSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: DefaultShopifyProductOptionSelection
      }
    );
    /**
    * Finds many shopifyProductOption. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyProductOptions",
          DefaultShopifyProductOptionSelection,
          "shopifyProductOption",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductOptionSelection
      }
    );
    /**
    * Finds the first matching shopifyProductOption. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyProductOptions",
          DefaultShopifyProductOptionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductOptionSelection
      }
    );
    /**
    * Finds the first matching shopifyProductOption. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyProductOptions",
          DefaultShopifyProductOptionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyProductOptionSelection
      }
    );
  }
}
export {
  DefaultShopifyProductOptionSelection,
  ShopifyProductOptionManager
};
//# sourceMappingURL=ShopifyProductOption.js.map
