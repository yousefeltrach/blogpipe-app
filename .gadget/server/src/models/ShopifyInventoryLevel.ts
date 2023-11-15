// All the generated types for the "Shopify Inventory Level" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyInventoryLevel } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyInventoryLevelServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly available: true;
      readonly shopifyUpdatedAt: true;
      readonly inventoryItemId: true;
    readonly inventoryItem: false;
      readonly locationId: true;
    readonly location: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyInventoryLevel` model. */
export interface CreateShopifyInventoryLevelActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyInventoryLevel` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyInventoryLevel, DefaultShopifyInventoryLevelServerSelection>>;
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
  context: CreateShopifyInventoryLevelActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyInventoryLevel` model. */
export interface UpdateShopifyInventoryLevelActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyInventoryLevel` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyInventoryLevel, DefaultShopifyInventoryLevelServerSelection>>;
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
  context: UpdateShopifyInventoryLevelActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyInventoryLevel` model. */
export interface DeleteShopifyInventoryLevelActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyInventoryLevel` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyInventoryLevel, DefaultShopifyInventoryLevelServerSelection>>;
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
  context: DeleteShopifyInventoryLevelActionContext;
};


  