import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultBlogPipeAdsSelection = {
  "__typename": true,
  "adName": true,
  "clicks": true,
  "createdAt": true,
  "endDate": true,
  "id": true,
  "impressions": true,
  "lastUpdate": true,
  "startDate": true,
  "status": true,
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
const apiIdentifier = "blogPipeAds";
const pluralApiIdentifier = "blogPipeAdss";
async function createBlogPipeAds(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createBlogPipeAds",
    DefaultBlogPipeAdsSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "blogPipeAds": {
        value: newVariables.blogPipeAds,
        required: false,
        type: "CreateBlogPipeAdsInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateBlogPipeAds(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateBlogPipeAds",
    DefaultBlogPipeAdsSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "blogPipeAds": {
        value: newVariables.blogPipeAds,
        required: false,
        type: "UpdateBlogPipeAdsInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteBlogPipeAds(id, options) {
  return await actionRunner(
    this,
    "deleteBlogPipeAds",
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
class BlogPipeAdsManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one blogPipeAds by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "blogPipeAds",
          id,
          DefaultBlogPipeAdsSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "blogPipeAds",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeAdsSelection
      }
    );
    /**
    * Finds one blogPipeAds by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "blogPipeAds",
          id,
          DefaultBlogPipeAdsSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "blogPipeAds",
        modelApiIdentifier: "blogPipeAds",
        defaultSelection: DefaultBlogPipeAdsSelection
      }
    );
    /**
    * Finds many blogPipeAds. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "blogPipeAdss",
          DefaultBlogPipeAdsSelection,
          "blogPipeAds",
          options
        );
      },
      {
        type: "findMany",
        operationName: "blogPipeAdss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeAdsSelection
      }
    );
    /**
    * Finds the first matching blogPipeAds. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "blogPipeAdss",
          DefaultBlogPipeAdsSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "blogPipeAdss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeAdsSelection
      }
    );
    /**
    * Finds the first matching blogPipeAds. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "blogPipeAdss",
          DefaultBlogPipeAdsSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "blogPipeAdss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeAdsSelection
      }
    );
    /**
    * Finds one blogPipeAds by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "blogPipeAdss",
          "id",
          value,
          DefaultBlogPipeAdsSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "blogPipeAdss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeAdsSelection
      }
    );
    this.create = Object.assign(
      createBlogPipeAds,
      {
        type: "action",
        operationName: "createBlogPipeAds",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultBlogPipeAdsSelection,
        variables: {
          "blogPipeAds": {
            required: false,
            type: "CreateBlogPipeAdsInput"
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
          (input) => disambiguateActionParams(
            this["create"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkCreateBlogPipeAds",
          DefaultBlogPipeAdsSelection,
          "blogPipeAds",
          "blogPipeAds",
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
        operationName: "bulkCreateBlogPipeAds",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "blogPipeAds",
        isBulk: true,
        defaultSelection: DefaultBlogPipeAdsSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateBlogPipeAdsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateBlogPipeAds,
      {
        type: "action",
        operationName: "updateBlogPipeAds",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultBlogPipeAdsSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "blogPipeAds": {
            required: false,
            type: "UpdateBlogPipeAdsInput"
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
          (input) => disambiguateActionParams(
            this["update"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkUpdateBlogPipeAds",
          DefaultBlogPipeAdsSelection,
          "blogPipeAds",
          "blogPipeAds",
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
        operationName: "bulkUpdateBlogPipeAds",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "blogPipeAds",
        isBulk: true,
        defaultSelection: DefaultBlogPipeAdsSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateBlogPipeAdsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteBlogPipeAds,
      {
        type: "action",
        operationName: "deleteBlogPipeAds",
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
        return await actionRunner(
          this,
          "bulkDeleteBlogPipeAds",
          null,
          "blogPipeAds",
          "blogPipeAds",
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
        operationName: "bulkDeleteBlogPipeAds",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "blogPipeAds",
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
  }
}
export {
  BlogPipeAdsManager,
  DefaultBlogPipeAdsSelection
};
//# sourceMappingURL=BlogPipeAds.js.map
