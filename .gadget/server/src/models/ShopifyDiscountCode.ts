// All the generated types for the "Shopify Discount Code" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyDiscountCode } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyDiscountCodeServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly code: true;
      readonly shopifyCreatedAt: true;
      readonly shopifyUpdatedAt: true;
      readonly usageCount: true;
      readonly priceRuleId: true;
    readonly priceRule: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyDiscountCode` model. */
export interface CreateShopifyDiscountCodeActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyDiscountCode` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyDiscountCode, DefaultShopifyDiscountCodeServerSelection>>;
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
  context: CreateShopifyDiscountCodeActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyDiscountCode` model. */
export interface UpdateShopifyDiscountCodeActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyDiscountCode` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyDiscountCode, DefaultShopifyDiscountCodeServerSelection>>;
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
  context: UpdateShopifyDiscountCodeActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyDiscountCode` model. */
export interface DeleteShopifyDiscountCodeActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyDiscountCode` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyDiscountCode, DefaultShopifyDiscountCodeServerSelection>>;
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
  context: DeleteShopifyDiscountCodeActionContext;
};


  