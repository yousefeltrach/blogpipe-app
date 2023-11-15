// All the generated types for the "articles" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, BlogPipeArticle } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultBlogPipeArticleServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly shopId: true;
    readonly shop: false;
      readonly title: true;
      readonly status: true;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `blogPipeArticle` model. */
export interface CreateBlogPipeArticleActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `blogPipeArticle` record this action is operating on.
  */
  record: GadgetRecord<Select<BlogPipeArticle, DefaultBlogPipeArticleServerSelection>>;
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
  context: CreateBlogPipeArticleActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `blogPipeArticle` model. */
export interface UpdateBlogPipeArticleActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `blogPipeArticle` record this action is operating on.
  */
  record: GadgetRecord<Select<BlogPipeArticle, DefaultBlogPipeArticleServerSelection>>;
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
  context: UpdateBlogPipeArticleActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `blogPipeArticle` model. */
export interface DeleteBlogPipeArticleActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `blogPipeArticle` record this action is operating on.
  */
  record: GadgetRecord<Select<BlogPipeArticle, DefaultBlogPipeArticleServerSelection>>;
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
  context: DeleteBlogPipeArticleActionContext;
};


  