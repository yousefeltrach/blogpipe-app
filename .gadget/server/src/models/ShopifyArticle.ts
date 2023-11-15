// All the generated types for the "Shopify Article" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyArticle } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyArticleServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly comments: false;
      readonly author: true;
      readonly body: true;
      readonly shopifyCreatedAt: true;
      readonly handle: true;
      readonly image: true;
      readonly published: true;
      readonly publishedAt: true;
      readonly summary: true;
      readonly tags: true;
      readonly templateSuffix: true;
      readonly title: true;
      readonly shopifyUpdatedAt: true;
      readonly blogId: true;
    readonly blog: false;
      readonly shopId: true;
    readonly shop: false;
      readonly status: true;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyArticle` model. */
export interface CreateShopifyArticleActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyArticle` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyArticle, DefaultShopifyArticleServerSelection>>;
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
  context: CreateShopifyArticleActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyArticle` model. */
export interface UpdateShopifyArticleActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyArticle` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyArticle, DefaultShopifyArticleServerSelection>>;
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
  context: UpdateShopifyArticleActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyArticle` model. */
export interface DeleteShopifyArticleActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyArticle` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyArticle, DefaultShopifyArticleServerSelection>>;
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
  context: DeleteShopifyArticleActionContext;
};


  