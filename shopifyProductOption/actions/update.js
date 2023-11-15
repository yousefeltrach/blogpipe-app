import { applyParams, preventCrossShopDataAccess, save, ActionOptions, UpdateShopifyProductOptionActionContext } from "gadget-server";

/**
 * @param { UpdateShopifyProductOptionActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { UpdateShopifyProductOptionActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update"
};
