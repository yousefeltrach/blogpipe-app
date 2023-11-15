import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyShopSelection = {
  "__typename": true,
  "address1": true,
  "address2": true,
  "checkoutApiSupported": true,
  "city": true,
  "cookieConsentLevel": true,
  "country": true,
  "countryCode": true,
  "countryName": true,
  "countyTaxes": true,
  "createdAt": true,
  "currency": true,
  "customerEmail": true,
  "domain": true,
  "eligibleForCardReaderGiveaway": true,
  "eligibleForPayments": true,
  "email": true,
  "enabledPresentmentCurrencies": true,
  "finances": true,
  "forceSsl": true,
  "googleAppsDomain": true,
  "googleAppsLoginEnabled": true,
  "grantedScopes": true,
  "hasDiscounts": true,
  "hasGiftCards": true,
  "hasStorefront": true,
  "ianaTimezone": true,
  "id": true,
  "installedViaApiKey": true,
  "latitude": true,
  "longitude": true,
  "marketingSmsContentEnabledAtCheckout": true,
  "moneyFormat": true,
  "moneyInEmailsFormat": true,
  "moneyWithCurrencyFormat": true,
  "moneyWithCurrencyInEmailsFormat": true,
  "multiLocationEnabled": true,
  "myshopifyDomain": true,
  "name": true,
  "passwordEnabled": true,
  "phone": true,
  "planDisplayName": true,
  "planName": true,
  "preLaunchEnabled": true,
  "primaryLocale": true,
  "province": true,
  "provinceCode": true,
  "registeredWebhooks": true,
  "requiresExtraPaymentsAgreement": true,
  "setupRequired": true,
  "shopOwner": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "source": true,
  "state": true,
  "taxShipping": true,
  "taxesIncluded": true,
  "timezone": true,
  "transactionalSmsDisabled": true,
  "updatedAt": true,
  "weightUnit": true,
  "zipCode": true
};
;
;
;
;
;
;
const apiIdentifier = "shopifyShop";
const pluralApiIdentifier = "shopifyShops";
async function actionAShopifyShop(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["actionA"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "actionAShopifyShop",
    DefaultShopifyShopSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyShop": {
        value: newVariables.shopifyShop,
        required: false,
        type: "ActionAShopifyShopInput"
      }
    },
    options,
    null,
    false
  );
}
class ShopifyShopManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyShop by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyShop",
          id,
          DefaultShopifyShopSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyShopSelection
      }
    );
    /**
    * Finds one shopifyShop by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyShop",
          id,
          DefaultShopifyShopSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: DefaultShopifyShopSelection
      }
    );
    /**
    * Finds many shopifyShop. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyShops",
          DefaultShopifyShopSelection,
          "shopifyShop",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyShopSelection
      }
    );
    /**
    * Finds the first matching shopifyShop. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyShops",
          DefaultShopifyShopSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyShopSelection
      }
    );
    /**
    * Finds the first matching shopifyShop. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyShops",
          DefaultShopifyShopSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyShopSelection
      }
    );
    this.actionA = Object.assign(
      actionAShopifyShop,
      {
        type: "action",
        operationName: "actionAShopifyShop",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyShopSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyShop": {
            required: false,
            type: "ActionAShopifyShopInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkActionA action with the given inputs.
    */
    this.bulkActionA = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["actionA"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkActionAShopifyShops",
          DefaultShopifyShopSelection,
          "shopifyShop",
          "shopifyShops",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkActionA"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkActionAShopifyShops",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyShops",
        isBulk: true,
        defaultSelection: DefaultShopifyShopSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkActionAShopifyShopsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
  }
}
export {
  DefaultShopifyShopSelection,
  ShopifyShopManager
};
//# sourceMappingURL=ShopifyShop.js.map
