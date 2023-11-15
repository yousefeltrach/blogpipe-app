// All the generated types for the "Shopify Inventory Item" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyInventoryItem } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyInventoryItemServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly productVariant: false;
      readonly cost: true;
      readonly countryCodeOfOrigin: true;
      readonly countryHarmonizedSystemCodes: true;
      readonly shopifyCreatedAt: true;
      readonly harmonizedSystemCode: true;
      readonly provinceCodeOfOrigin: true;
      readonly requiresShipping: true;
      readonly sku: true;
      readonly tracked: true;
      readonly shopifyUpdatedAt: true;
      readonly locations: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyInventoryItem` model. */
export interface CreateShopifyInventoryItemActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyInventoryItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyInventoryItem, DefaultShopifyInventoryItemServerSelection>>;
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
  context: CreateShopifyInventoryItemActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyInventoryItem` model. */
export interface UpdateShopifyInventoryItemActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyInventoryItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyInventoryItem, DefaultShopifyInventoryItemServerSelection>>;
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
  context: UpdateShopifyInventoryItemActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyInventoryItem` model. */
export interface DeleteShopifyInventoryItemActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyInventoryItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyInventoryItem, DefaultShopifyInventoryItemServerSelection>>;
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
  context: DeleteShopifyInventoryItemActionContext;
};


  