import {
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyInventoryLevelSelection = {
  "__typename": true,
  "available": true,
  "createdAt": true,
  "id": true,
  "shopifyUpdatedAt": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyInventoryLevel";
const pluralApiIdentifier = "shopifyInventoryLevels";
class ShopifyInventoryLevelManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyInventoryLevel by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyInventoryLevel",
          id,
          DefaultShopifyInventoryLevelSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyInventoryLevel",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyInventoryLevelSelection
      }
    );
    /**
    * Finds one shopifyInventoryLevel by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyInventoryLevel",
          id,
          DefaultShopifyInventoryLevelSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyInventoryLevel",
        modelApiIdentifier: "shopifyInventoryLevel",
        defaultSelection: DefaultShopifyInventoryLevelSelection
      }
    );
    /**
    * Finds many shopifyInventoryLevel. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyInventoryLevels",
          DefaultShopifyInventoryLevelSelection,
          "shopifyInventoryLevel",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyInventoryLevels",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyInventoryLevelSelection
      }
    );
    /**
    * Finds the first matching shopifyInventoryLevel. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyInventoryLevels",
          DefaultShopifyInventoryLevelSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyInventoryLevels",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyInventoryLevelSelection
      }
    );
    /**
    * Finds the first matching shopifyInventoryLevel. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyInventoryLevels",
          DefaultShopifyInventoryLevelSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyInventoryLevels",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyInventoryLevelSelection
      }
    );
    /**
    * Finds one shopifyInventoryLevel by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "shopifyInventoryLevels",
          "id",
          value,
          DefaultShopifyInventoryLevelSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyInventoryLevels",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyInventoryLevelSelection
      }
    );
    /**
    * Finds one shopifyInventoryLevel by its inventoryItem. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findByInventoryItem = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "shopifyInventoryLevels",
          "inventoryItem",
          value,
          DefaultShopifyInventoryLevelSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "inventoryItem",
        operationName: "shopifyInventoryLevels",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyInventoryLevelSelection
      }
    );
  }
}
export {
  DefaultShopifyInventoryLevelSelection,
  ShopifyInventoryLevelManager
};
//# sourceMappingURL=ShopifyInventoryLevel.js.map
