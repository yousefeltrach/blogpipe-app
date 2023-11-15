import { preventCrossShopDataAccess, deleteRecord, ActionOptions, DeleteShopifyArticleActionContext } from "gadget-server";

/**
 * @param { DeleteShopifyArticleActionContext } context
 */
export async function run({ params, record, logger, api }) {
  await preventCrossShopDataAccess(params, record);
  await deleteRecord(record);
};

/**
 * @param { DeleteShopifyArticleActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
