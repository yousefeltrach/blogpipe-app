import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyLocationSelection = {
  "__typename": true,
  "active": true,
  "address1": true,
  "address2": true,
  "city": true,
  "country": true,
  "countryCode": true,
  "createdAt": true,
  "id": true,
  "legacy": true,
  "localizedCountryName": true,
  "localizedProvinceName": true,
  "name": true,
  "phone": true,
  "province": true,
  "provinceCode": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "updatedAt": true,
  "zipCode": true
};
;
;
;
;
;
const apiIdentifier = "shopifyLocation";
const pluralApiIdentifier = "shopifyLocations";
class ShopifyLocationManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyLocation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyLocation",
          id,
          DefaultShopifyLocationSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyLocation",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyLocationSelection
      }
    );
    /**
    * Finds one shopifyLocation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyLocation",
          id,
          DefaultShopifyLocationSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyLocation",
        modelApiIdentifier: "shopifyLocation",
        defaultSelection: DefaultShopifyLocationSelection
      }
    );
    /**
    * Finds many shopifyLocation. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyLocations",
          DefaultShopifyLocationSelection,
          "shopifyLocation",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyLocations",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyLocationSelection
      }
    );
    /**
    * Finds the first matching shopifyLocation. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyLocations",
          DefaultShopifyLocationSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyLocations",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyLocationSelection
      }
    );
    /**
    * Finds the first matching shopifyLocation. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyLocations",
          DefaultShopifyLocationSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyLocations",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyLocationSelection
      }
    );
  }
}
export {
  DefaultShopifyLocationSelection,
  ShopifyLocationManager
};
//# sourceMappingURL=ShopifyLocation.js.map
