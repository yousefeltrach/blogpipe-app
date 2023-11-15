// All the generated types for the "blogPipeTopics" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, BlogPipeTopics } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultBlogPipeTopicsServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly title: true;
      readonly keywords: true;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `blogPipeTopics` model. */
export interface CreateBlogPipeTopicsActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `blogPipeTopics` record this action is operating on.
  */
  record: GadgetRecord<Select<BlogPipeTopics, DefaultBlogPipeTopicsServerSelection>>;
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
  context: CreateBlogPipeTopicsActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `blogPipeTopics` model. */
export interface UpdateBlogPipeTopicsActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `blogPipeTopics` record this action is operating on.
  */
  record: GadgetRecord<Select<BlogPipeTopics, DefaultBlogPipeTopicsServerSelection>>;
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
  context: UpdateBlogPipeTopicsActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `blogPipeTopics` model. */
export interface DeleteBlogPipeTopicsActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `blogPipeTopics` record this action is operating on.
  */
  record: GadgetRecord<Select<BlogPipeTopics, DefaultBlogPipeTopicsServerSelection>>;
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
  context: DeleteBlogPipeTopicsActionContext;
};


    
/** All the data passed to an effect or precondition within the `actionA` action on the `blogPipeTopics` model. */
export interface ActionABlogPipeTopicsActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `blogPipeTopics` record this action is operating on.
  */
  record: GadgetRecord<Select<BlogPipeTopics, DefaultBlogPipeTopicsServerSelection>>;
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
  context: ActionABlogPipeTopicsActionContext;
};


  