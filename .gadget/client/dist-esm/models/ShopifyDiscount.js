import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyDiscountSelection = {
  "__typename": true,
  "appDiscountType": true,
  "appliesOnOneTimePurchase": true,
  "appliesOnSubscription": true,
  "appliesOncePerCustomer": true,
  "asyncUsageCount": true,
  "codeCount": true,
  "combinesWith": true,
  "createdAt": true,
  "destinationSelection": true,
  "discountClass": true,
  "discountId": true,
  "endsAt": true,
  "errorHistory": true,
  "hasTimelineComment": true,
  "id": true,
  "maximumShippingPrice": true,
  "minimumRequirement": true,
  "recurringCycleLimit": true,
  "shareableUrls": true,
  "shopifyCreatedAt": true,
  "shortSummary": true,
  "startsAt": true,
  "status": true,
  "summary": true,
  "title": true,
  "totalSales": true,
  "updatedAt": true,
  "usageLimit": true,
  "usesPerOrderLimit": true
};
;
;
;
;
;
const apiIdentifier = "shopifyDiscount";
const pluralApiIdentifier = "shopifyDiscounts";
class ShopifyDiscountManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyDiscount by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyDiscount",
          id,
          DefaultShopifyDiscountSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyDiscount",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountSelection
      }
    );
    /**
    * Finds one shopifyDiscount by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyDiscount",
          id,
          DefaultShopifyDiscountSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyDiscount",
        modelApiIdentifier: "shopifyDiscount",
        defaultSelection: DefaultShopifyDiscountSelection
      }
    );
    /**
    * Finds many shopifyDiscount. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyDiscounts",
          DefaultShopifyDiscountSelection,
          "shopifyDiscount",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyDiscounts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountSelection
      }
    );
    /**
    * Finds the first matching shopifyDiscount. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDiscounts",
          DefaultShopifyDiscountSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyDiscounts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountSelection
      }
    );
    /**
    * Finds the first matching shopifyDiscount. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDiscounts",
          DefaultShopifyDiscountSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyDiscounts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountSelection
      }
    );
  }
}
export {
  DefaultShopifyDiscountSelection,
  ShopifyDiscountManager
};
//# sourceMappingURL=ShopifyDiscount.js.map
