// All the generated types for the "Shopify Shop" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyShop } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyShopServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly state: true;
      readonly blogPipeAds: false;
      readonly collects: false;
      readonly locations: false;
      readonly productVariants: false;
      readonly inventoryItems: false;
      readonly pages: false;
      readonly priceRules: false;
      readonly events: false;
      readonly collections: false;
      readonly products: false;
      readonly inventoryLevels: false;
      readonly syncs: false;
      readonly blogs: false;
      readonly redirects: false;
      readonly accessToken: true;
      readonly address1: true;
      readonly address2: true;
      readonly checkoutApiSupported: true;
      readonly city: true;
      readonly cookieConsentLevel: true;
      readonly country: true;
      readonly countryCode: true;
      readonly countryName: true;
      readonly countyTaxes: true;
      readonly shopifyCreatedAt: true;
      readonly currency: true;
      readonly customerEmail: true;
      readonly domain: true;
      readonly productOptions: false;
      readonly eligibleForCardReaderGiveaway: true;
      readonly eligibleForPayments: true;
      readonly email: true;
      readonly enabledPresentmentCurrencies: true;
      readonly finances: true;
      readonly forceSsl: true;
      readonly discounts: false;
      readonly googleAppsDomain: true;
      readonly googleAppsLoginEnabled: true;
      readonly grantedScopes: true;
      readonly hasDiscounts: true;
      readonly hasGiftCards: true;
      readonly hasStorefront: true;
      readonly ianaTimezone: true;
      readonly comments: false;
      readonly installedViaApiKey: true;
      readonly latitude: true;
      readonly longitude: true;
      readonly marketingSmsContentEnabledAtCheckout: true;
      readonly moneyFormat: true;
      readonly moneyInEmailsFormat: true;
      readonly moneyWithCurrencyFormat: true;
      readonly moneyWithCurrencyInEmailsFormat: true;
      readonly multiLocationEnabled: true;
      readonly myshopifyDomain: true;
      readonly name: true;
      readonly files: false;
      readonly passwordEnabled: true;
      readonly phone: true;
      readonly planDisplayName: true;
      readonly planName: true;
      readonly preLaunchEnabled: true;
      readonly primaryLocale: true;
      readonly province: true;
      readonly provinceCode: true;
      readonly gdprRequests: false;
      readonly articles: false;
      readonly registeredWebhooks: true;
      readonly requiresExtraPaymentsAgreement: true;
      readonly setupRequired: true;
      readonly shopOwner: true;
      readonly discountCodes: false;
      readonly source: true;
      readonly taxShipping: true;
      readonly taxesIncluded: true;
      readonly timezone: true;
      readonly productImages: false;
      readonly transactionalSmsDisabled: true;
      readonly shopifyUpdatedAt: true;
      readonly weightUnit: true;
      readonly zipCode: true;
      readonly primaryLocationId: true;
    readonly primaryLocation: false;
  };

  
/** All the data passed to an effect or precondition within the `update` action on the `shopifyShop` model. */
export interface UpdateShopifyShopActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyShop` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: UpdateShopifyShopActionContext;
};


    
/** All the data passed to an effect or precondition within the `install` action on the `shopifyShop` model. */
export interface InstallShopifyShopActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyShop` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: InstallShopifyShopActionContext;
};


    
/** All the data passed to an effect or precondition within the `uninstall` action on the `shopifyShop` model. */
export interface UninstallShopifyShopActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyShop` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: UninstallShopifyShopActionContext;
};


    
/** All the data passed to an effect or precondition within the `reinstall` action on the `shopifyShop` model. */
export interface ReinstallShopifyShopActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyShop` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: ReinstallShopifyShopActionContext;
};


    
/** All the data passed to an effect or precondition within the `actionA` action on the `shopifyShop` model. */
export interface ActionAShopifyShopActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyShop` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: ActionAShopifyShopActionContext;
};


  