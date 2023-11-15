"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var BlogPipeTopics_exports = {};
__export(BlogPipeTopics_exports, {
  BlogPipeTopicsManager: () => BlogPipeTopicsManager,
  DefaultBlogPipeTopicsSelection: () => DefaultBlogPipeTopicsSelection
});
module.exports = __toCommonJS(BlogPipeTopics_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultBlogPipeTopicsSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "keywords": true,
  "title": true,
  "updatedAt": true
};
;
;
;
;
;
;
;
;
;
const apiIdentifier = "blogPipeTopics";
const pluralApiIdentifier = "blogPipeTopicss";
async function createBlogPipeTopics(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createBlogPipeTopics",
    DefaultBlogPipeTopicsSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "blogPipeTopics": {
        value: newVariables.blogPipeTopics,
        required: false,
        type: "CreateBlogPipeTopicsInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateBlogPipeTopics(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateBlogPipeTopics",
    DefaultBlogPipeTopicsSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "blogPipeTopics": {
        value: newVariables.blogPipeTopics,
        required: false,
        type: "UpdateBlogPipeTopicsInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteBlogPipeTopics(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteBlogPipeTopics",
    null,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      }
    },
    options,
    null,
    false
  );
}
async function actionABlogPipeTopics(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["actionA"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "actionABlogPipeTopics",
    DefaultBlogPipeTopicsSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "blogPipeTopics": {
        value: newVariables.blogPipeTopics,
        required: false,
        type: "ActionABlogPipeTopicsInput"
      }
    },
    options,
    null,
    false
  );
}
class BlogPipeTopicsManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one blogPipeTopics by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "blogPipeTopics",
          id,
          DefaultBlogPipeTopicsSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "blogPipeTopics",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeTopicsSelection
      }
    );
    /**
    * Finds one blogPipeTopics by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "blogPipeTopics",
          id,
          DefaultBlogPipeTopicsSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "blogPipeTopics",
        modelApiIdentifier: "blogPipeTopics",
        defaultSelection: DefaultBlogPipeTopicsSelection
      }
    );
    /**
    * Finds many blogPipeTopics. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "blogPipeTopicss",
          DefaultBlogPipeTopicsSelection,
          "blogPipeTopics",
          options
        );
      },
      {
        type: "findMany",
        operationName: "blogPipeTopicss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeTopicsSelection
      }
    );
    /**
    * Finds the first matching blogPipeTopics. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "blogPipeTopicss",
          DefaultBlogPipeTopicsSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "blogPipeTopicss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeTopicsSelection
      }
    );
    /**
    * Finds the first matching blogPipeTopics. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "blogPipeTopicss",
          DefaultBlogPipeTopicsSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "blogPipeTopicss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeTopicsSelection
      }
    );
    /**
    * Finds one blogPipeTopics by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "blogPipeTopicss",
          "id",
          value,
          DefaultBlogPipeTopicsSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "blogPipeTopicss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeTopicsSelection
      }
    );
    this.create = Object.assign(
      createBlogPipeTopics,
      {
        type: "action",
        operationName: "createBlogPipeTopics",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultBlogPipeTopicsSelection,
        variables: {
          "blogPipeTopics": {
            required: false,
            type: "CreateBlogPipeTopicsInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkCreate action with the given inputs.
    */
    this.bulkCreate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["create"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkCreateBlogPipeTopics",
          DefaultBlogPipeTopicsSelection,
          "blogPipeTopics",
          "blogPipeTopics",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkCreate"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkCreateBlogPipeTopics",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "blogPipeTopics",
        isBulk: true,
        defaultSelection: DefaultBlogPipeTopicsSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateBlogPipeTopicsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateBlogPipeTopics,
      {
        type: "action",
        operationName: "updateBlogPipeTopics",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultBlogPipeTopicsSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "blogPipeTopics": {
            required: false,
            type: "UpdateBlogPipeTopicsInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkUpdate action with the given inputs.
    */
    this.bulkUpdate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["update"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkUpdateBlogPipeTopics",
          DefaultBlogPipeTopicsSelection,
          "blogPipeTopics",
          "blogPipeTopics",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkUpdate"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateBlogPipeTopics",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "blogPipeTopics",
        isBulk: true,
        defaultSelection: DefaultBlogPipeTopicsSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateBlogPipeTopicsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteBlogPipeTopics,
      {
        type: "action",
        operationName: "deleteBlogPipeTopics",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: null,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkDelete action with the given inputs. Deletes the records on the server.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkDeleteBlogPipeTopics",
          null,
          "blogPipeTopics",
          "blogPipeTopics",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkDelete"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteBlogPipeTopics",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "blogPipeTopics",
        isBulk: true,
        defaultSelection: null,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    this.actionA = Object.assign(
      actionABlogPipeTopics,
      {
        type: "action",
        operationName: "actionABlogPipeTopics",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultBlogPipeTopicsSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "blogPipeTopics": {
            required: false,
            type: "ActionABlogPipeTopicsInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkActionA action with the given inputs.
    */
    this.bulkActionA = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["actionA"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkActionABlogPipeTopics",
          DefaultBlogPipeTopicsSelection,
          "blogPipeTopics",
          "blogPipeTopics",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkActionA"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkActionABlogPipeTopics",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "blogPipeTopics",
        isBulk: true,
        defaultSelection: DefaultBlogPipeTopicsSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkActionABlogPipeTopicsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BlogPipeTopicsManager,
  DefaultBlogPipeTopicsSelection
});
//# sourceMappingURL=BlogPipeTopics.js.map
