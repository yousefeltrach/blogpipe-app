import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyInventoryItemSelection = {
  "__typename": true,
  "cost": true,
  "countryCodeOfOrigin": true,
  "countryHarmonizedSystemCodes": true,
  "createdAt": true,
  "harmonizedSystemCode": true,
  "id": true,
  "provinceCodeOfOrigin": true,
  "requiresShipping": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "sku": true,
  "tracked": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyInventoryItem";
const pluralApiIdentifier = "shopifyInventoryItems";
class ShopifyInventoryItemManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyInventoryItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyInventoryItem",
          id,
          DefaultShopifyInventoryItemSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyInventoryItem",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyInventoryItemSelection
      }
    );
    /**
    * Finds one shopifyInventoryItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyInventoryItem",
          id,
          DefaultShopifyInventoryItemSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyInventoryItem",
        modelApiIdentifier: "shopifyInventoryItem",
        defaultSelection: DefaultShopifyInventoryItemSelection
      }
    );
    /**
    * Finds many shopifyInventoryItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyInventoryItems",
          DefaultShopifyInventoryItemSelection,
          "shopifyInventoryItem",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyInventoryItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyInventoryItemSelection
      }
    );
    /**
    * Finds the first matching shopifyInventoryItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyInventoryItems",
          DefaultShopifyInventoryItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyInventoryItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyInventoryItemSelection
      }
    );
    /**
    * Finds the first matching shopifyInventoryItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyInventoryItems",
          DefaultShopifyInventoryItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyInventoryItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyInventoryItemSelection
      }
    );
  }
}
export {
  DefaultShopifyInventoryItemSelection,
  ShopifyInventoryItemManager
};
//# sourceMappingURL=ShopifyInventoryItem.js.map
