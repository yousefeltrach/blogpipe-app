// All the generated types for the "Shopify Location" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyLocation } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyLocationServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly active: true;
      readonly address1: true;
      readonly address2: true;
      readonly city: true;
      readonly country: true;
      readonly countryCode: true;
      readonly shopifyCreatedAt: true;
      readonly legacy: true;
      readonly localizedCountryName: true;
      readonly localizedProvinceName: true;
      readonly name: true;
      readonly phone: true;
      readonly province: true;
      readonly provinceCode: true;
      readonly shopifyUpdatedAt: true;
      readonly zipCode: true;
      readonly inventoryItems: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyLocation` model. */
export interface CreateShopifyLocationActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyLocation` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyLocation, DefaultShopifyLocationServerSelection>>;
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
  context: CreateShopifyLocationActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyLocation` model. */
export interface UpdateShopifyLocationActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyLocation` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyLocation, DefaultShopifyLocationServerSelection>>;
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
  context: UpdateShopifyLocationActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyLocation` model. */
export interface DeleteShopifyLocationActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyLocation` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyLocation, DefaultShopifyLocationServerSelection>>;
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
  context: DeleteShopifyLocationActionContext;
};


  