import { applyParams, save, ActionOptions, preventCrossShopDataAccess, CreateBlogPipeAdsActionContext } from "gadget-server";

/**
 * @param { CreateBlogPipeAdsActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { CreateBlogPipeAdsActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
