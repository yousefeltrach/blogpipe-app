// All the generated types for the "Shopify Collection" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyCollection } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyCollectionServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly body: true;
      readonly disjunctive: true;
      readonly handle: true;
      readonly image: true;
      readonly publishedAt: true;
      readonly publishedScope: true;
      readonly rules: true;
      readonly sortOrder: true;
      readonly templateSuffix: true;
      readonly title: true;
      readonly shopifyUpdatedAt: true;
      readonly products: false;
      readonly shopId: true;
    readonly shop: false;
      readonly collectionType: true;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyCollection` model. */
export interface CreateShopifyCollectionActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCollection` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCollection, DefaultShopifyCollectionServerSelection>>;
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
  context: CreateShopifyCollectionActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyCollection` model. */
export interface UpdateShopifyCollectionActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCollection` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCollection, DefaultShopifyCollectionServerSelection>>;
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
  context: UpdateShopifyCollectionActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyCollection` model. */
export interface DeleteShopifyCollectionActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyCollection` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCollection, DefaultShopifyCollectionServerSelection>>;
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
  context: DeleteShopifyCollectionActionContext;
};


  