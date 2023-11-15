import { preventCrossShopDataAccess, deleteRecord, ActionOptions, DeleteShopifyRedirectActionContext } from "gadget-server";

/**
 * @param { DeleteShopifyRedirectActionContext } context
 */
export async function run({ params, record, logger, api }) {
  await preventCrossShopDataAccess(params, record);
  await deleteRecord(record);
};

/**
 * @param { DeleteShopifyRedirectActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
