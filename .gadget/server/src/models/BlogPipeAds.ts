// All the generated types for the "blogPipeAds" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, BlogPipeAds } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultBlogPipeAdsServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly shopId: true;
    readonly shop: false;
      readonly adName: true;
      readonly status: true;
      readonly startDate: true;
      readonly endDate: true;
      readonly impressions: true;
      readonly clicks: true;
      readonly lastUpdate: true;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `blogPipeAds` model. */
export interface CreateBlogPipeAdsActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `blogPipeAds` record this action is operating on.
  */
  record: GadgetRecord<Select<BlogPipeAds, DefaultBlogPipeAdsServerSelection>>;
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
  context: CreateBlogPipeAdsActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `blogPipeAds` model. */
export interface UpdateBlogPipeAdsActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `blogPipeAds` record this action is operating on.
  */
  record: GadgetRecord<Select<BlogPipeAds, DefaultBlogPipeAdsServerSelection>>;
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
  context: UpdateBlogPipeAdsActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `blogPipeAds` model. */
export interface DeleteBlogPipeAdsActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `blogPipeAds` record this action is operating on.
  */
  record: GadgetRecord<Select<BlogPipeAds, DefaultBlogPipeAdsServerSelection>>;
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
  context: DeleteBlogPipeAdsActionContext;
};


  