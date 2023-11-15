import { preventCrossShopDataAccess, deleteRecord, ActionOptions, DeleteShopifyInventoryItemActionContext } from "gadget-server";

/**
 * @param { DeleteShopifyInventoryItemActionContext } context
 */
export async function run({ params, record, logger, api }) {
  await preventCrossShopDataAccess(params, record);
  await deleteRecord(record);
};

/**
 * @param { DeleteShopifyInventoryItemActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
