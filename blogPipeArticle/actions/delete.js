import { deleteRecord, ActionOptions, preventCrossShopDataAccess, DeleteArticlesActionContext } from "gadget-server";

/**
 * @param { DeleteArticlesActionContext } context
 */
export async function run({ params, record, logger, api }) {
  
  await preventCrossShopDataAccess(params, record);
  await deleteRecord(record);
};

/**
 * @param { DeleteArticlesActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
