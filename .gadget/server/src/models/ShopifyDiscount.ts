// All the generated types for the "Shopify Discount" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyDiscount } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyDiscountServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly appDiscountType: true;
      readonly appliesOnOneTimePurchase: true;
      readonly appliesOnSubscription: true;
      readonly appliesOncePerCustomer: true;
      readonly asyncUsageCount: true;
      readonly codeCount: true;
      readonly combinesWith: true;
      readonly shopifyCreatedAt: true;
      readonly destinationSelection: true;
      readonly discountClass: true;
      readonly discountId: true;
      readonly endsAt: true;
      readonly errorHistory: true;
      readonly hasTimelineComment: true;
      readonly maximumShippingPrice: true;
      readonly minimumRequirement: true;
      readonly recurringCycleLimit: true;
      readonly shareableUrls: true;
      readonly shortSummary: true;
      readonly startsAt: true;
      readonly status: true;
      readonly summary: true;
      readonly title: true;
      readonly totalSales: true;
      readonly usageLimit: true;
      readonly usesPerOrderLimit: true;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyDiscount` model. */
export interface CreateShopifyDiscountActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyDiscount` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyDiscount, DefaultShopifyDiscountServerSelection>>;
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
  context: CreateShopifyDiscountActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyDiscount` model. */
export interface UpdateShopifyDiscountActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyDiscount` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyDiscount, DefaultShopifyDiscountServerSelection>>;
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
  context: UpdateShopifyDiscountActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyDiscount` model. */
export interface DeleteShopifyDiscountActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyDiscount` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyDiscount, DefaultShopifyDiscountServerSelection>>;
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
  context: DeleteShopifyDiscountActionContext;
};


  