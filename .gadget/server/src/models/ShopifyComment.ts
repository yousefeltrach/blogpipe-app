// All the generated types for the "Shopify Comment" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyComment } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyCommentServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly author: true;
      readonly body: true;
      readonly bodyHtml: true;
      readonly shopifyCreatedAt: true;
      readonly email: true;
      readonly ip: true;
      readonly publishedAt: true;
      readonly status: true;
      readonly shopifyUpdatedAt: true;
      readonly userAgent: true;
      readonly articleId: true;
    readonly article: false;
      readonly blogId: true;
    readonly blog: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyComment` model. */
export interface CreateShopifyCommentActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyComment` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyComment, DefaultShopifyCommentServerSelection>>;
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
  context: CreateShopifyCommentActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyComment` model. */
export interface UpdateShopifyCommentActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyComment` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyComment, DefaultShopifyCommentServerSelection>>;
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
  context: UpdateShopifyCommentActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyComment` model. */
export interface DeleteShopifyCommentActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyComment` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyComment, DefaultShopifyCommentServerSelection>>;
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
  context: DeleteShopifyCommentActionContext;
};


  