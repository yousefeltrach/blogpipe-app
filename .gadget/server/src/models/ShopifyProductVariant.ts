// All the generated types for the "Shopify Product Variant" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyProductVariant } from "@gadget-client/y-blogpipe-develop";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyProductVariantServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly barcode: true;
      readonly compareAtPrice: true;
      readonly shopifyCreatedAt: true;
      readonly fulfillmentService: true;
      readonly grams: true;
      readonly inventoryManagement: true;
      readonly inventoryPolicy: true;
      readonly inventoryQuantity: true;
      readonly inventoryQuantityAdjustment: true;
      readonly oldInventoryQuantity: true;
      readonly option1: true;
      readonly option2: true;
      readonly option3: true;
      readonly position: true;
      readonly presentmentPrices: true;
      readonly price: true;
      readonly requiresShipping: true;
      readonly sku: true;
      readonly taxCode: true;
      readonly taxable: true;
      readonly title: true;
      readonly shopifyUpdatedAt: true;
      readonly weight: true;
      readonly weightUnit: true;
      readonly inventoryItemId: true;
    readonly inventoryItem: false;
      readonly productId: true;
    readonly product: false;
      readonly productImageId: true;
    readonly productImage: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `shopifyProductVariant` model. */
export interface CreateShopifyProductVariantActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyProductVariant` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyProductVariant, DefaultShopifyProductVariantServerSelection>>;
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
  context: CreateShopifyProductVariantActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `shopifyProductVariant` model. */
export interface UpdateShopifyProductVariantActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyProductVariant` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyProductVariant, DefaultShopifyProductVariantServerSelection>>;
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
  context: UpdateShopifyProductVariantActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `shopifyProductVariant` model. */
export interface DeleteShopifyProductVariantActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `shopifyProductVariant` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyProductVariant, DefaultShopifyProductVariantServerSelection>>;
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
  context: DeleteShopifyProductVariantActionContext;
};


  