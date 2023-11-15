// All the generated types for the "Shopify Blog" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyBlog } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyBlogServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly commentable: true;
      readonly shopifyCreatedAt: true;
      readonly feedburner: true;
      readonly feedburnerLocation: true;
      readonly handle: true;
      readonly comments: false;
      readonly articles: false;
      readonly tags: true;
      readonly templateSuffix: true;
      readonly title: true;
      readonly shopifyUpdatedAt: true;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyBlog` model. */
export interface CreateShopifyBlogActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyBlog` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyBlog, DefaultShopifyBlogServerSelection>>;
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
  context: CreateShopifyBlogActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyBlog` model. */
export interface UpdateShopifyBlogActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyBlog` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyBlog, DefaultShopifyBlogServerSelection>>;
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
  context: UpdateShopifyBlogActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyBlog` model. */
export interface DeleteShopifyBlogActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyBlog` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyBlog, DefaultShopifyBlogServerSelection>>;
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
  context: DeleteShopifyBlogActionContext;
};


  