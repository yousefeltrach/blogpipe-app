import { preventCrossShopDataAccess, deleteRecord, ActionOptions, DeleteShopifyDiscountCodeActionContext } from "gadget-server";

/**
 * @param { DeleteShopifyDiscountCodeActionContext } context
 */
export async function run({ params, record, logger, api }) {
  await preventCrossShopDataAccess(params, record);
  await deleteRecord(record);
};

/**
 * @param { DeleteShopifyDiscountCodeActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
