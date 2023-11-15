// All the generated types for the "Shopify Price Rule" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyPriceRule } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyPriceRuleServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly allocationLimit: true;
      readonly allocationMethod: true;
      readonly shopifyCreatedAt: true;
      readonly customerSegmentPrerequisiteIds: true;
      readonly customerSelection: true;
      readonly endsAt: true;
      readonly entitledCollectionIds: true;
      readonly entitledCountryIds: true;
      readonly entitledProductIds: true;
      readonly entitledVariantIds: true;
      readonly oncePerCustomer: true;
      readonly prerequisiteCollectionIds: true;
      readonly prerequisiteCustomerIds: true;
      readonly prerequisiteProductIds: true;
      readonly prerequisiteQuantityRange: true;
      readonly prerequisiteShippingPriceRange: true;
      readonly prerequisiteSubtotalRange: true;
      readonly prerequisiteToEntitlementPurchase: true;
      readonly prerequisiteToEntitlementQuantityRatio: true;
      readonly prerequisiteVariants: true;
      readonly startsAt: true;
      readonly targetSelection: true;
      readonly targetType: true;
      readonly title: true;
      readonly shopifyUpdatedAt: true;
      readonly usageLimit: true;
      readonly value: true;
      readonly valueType: true;
      readonly discountCodes: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyPriceRule` model. */
export interface CreateShopifyPriceRuleActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyPriceRule` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyPriceRule, DefaultShopifyPriceRuleServerSelection>>;
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
  context: CreateShopifyPriceRuleActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyPriceRule` model. */
export interface UpdateShopifyPriceRuleActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyPriceRule` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyPriceRule, DefaultShopifyPriceRuleServerSelection>>;
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
  context: UpdateShopifyPriceRuleActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyPriceRule` model. */
export interface DeleteShopifyPriceRuleActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyPriceRule` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyPriceRule, DefaultShopifyPriceRuleServerSelection>>;
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
  context: DeleteShopifyPriceRuleActionContext;
};


  