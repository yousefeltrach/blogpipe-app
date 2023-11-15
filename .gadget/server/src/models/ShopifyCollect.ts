// All the generated types for the "Shopify Collect" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyCollect } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyCollectServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly shopifyCreatedAt: true;
      readonly position: true;
      readonly sortValue: true;
      readonly shopifyUpdatedAt: true;
      readonly customCollectionId: true;
    readonly customCollection: false;
      readonly productId: true;
    readonly product: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyCollect` model. */
export interface CreateShopifyCollectActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCollect` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCollect, DefaultShopifyCollectServerSelection>>;
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
  context: CreateShopifyCollectActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyCollect` model. */
export interface UpdateShopifyCollectActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCollect` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCollect, DefaultShopifyCollectServerSelection>>;
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
  context: UpdateShopifyCollectActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyCollect` model. */
export interface DeleteShopifyCollectActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCollect` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCollect, DefaultShopifyCollectServerSelection>>;
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
  context: DeleteShopifyCollectActionContext;
};


  