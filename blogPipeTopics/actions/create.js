import { applyParams, save, ActionOptions, CreateBlogPipeTopicsActionContext } from "gadget-server";

/**
 * @param { CreateBlogPipeTopicsActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  await save(record);
};

/**
 * @param { CreateBlogPipeTopicsActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
