import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultBlogPipeArticleSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "status": true,
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
const apiIdentifier = "blogPipeArticle";
const pluralApiIdentifier = "blogPipeArticles";
async function createBlogPipeArticle(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createBlogPipeArticle",
    DefaultBlogPipeArticleSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "blogPipeArticle": {
        value: newVariables.blogPipeArticle,
        required: false,
        type: "CreateBlogPipeArticleInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateBlogPipeArticle(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateBlogPipeArticle",
    DefaultBlogPipeArticleSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "blogPipeArticle": {
        value: newVariables.blogPipeArticle,
        required: false,
        type: "UpdateBlogPipeArticleInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteBlogPipeArticle(id, options) {
  return await actionRunner(
    this,
    "deleteBlogPipeArticle",
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
class BlogPipeArticleManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one blogPipeArticle by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "blogPipeArticle",
          id,
          DefaultBlogPipeArticleSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "blogPipeArticle",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeArticleSelection
      }
    );
    /**
    * Finds one blogPipeArticle by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "blogPipeArticle",
          id,
          DefaultBlogPipeArticleSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "blogPipeArticle",
        modelApiIdentifier: "blogPipeArticle",
        defaultSelection: DefaultBlogPipeArticleSelection
      }
    );
    /**
    * Finds many blogPipeArticle. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "blogPipeArticles",
          DefaultBlogPipeArticleSelection,
          "blogPipeArticle",
          options
        );
      },
      {
        type: "findMany",
        operationName: "blogPipeArticles",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeArticleSelection
      }
    );
    /**
    * Finds the first matching blogPipeArticle. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "blogPipeArticles",
          DefaultBlogPipeArticleSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "blogPipeArticles",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeArticleSelection
      }
    );
    /**
    * Finds the first matching blogPipeArticle. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "blogPipeArticles",
          DefaultBlogPipeArticleSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "blogPipeArticles",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeArticleSelection
      }
    );
    /**
    * Finds one blogPipeArticle by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "blogPipeArticles",
          "id",
          value,
          DefaultBlogPipeArticleSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "blogPipeArticles",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultBlogPipeArticleSelection
      }
    );
    this.create = Object.assign(
      createBlogPipeArticle,
      {
        type: "action",
        operationName: "createBlogPipeArticle",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultBlogPipeArticleSelection,
        variables: {
          "blogPipeArticle": {
            required: false,
            type: "CreateBlogPipeArticleInput"
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
          "bulkCreateBlogPipeArticles",
          DefaultBlogPipeArticleSelection,
          "blogPipeArticle",
          "blogPipeArticles",
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
        operationName: "bulkCreateBlogPipeArticles",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "blogPipeArticles",
        isBulk: true,
        defaultSelection: DefaultBlogPipeArticleSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateBlogPipeArticlesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateBlogPipeArticle,
      {
        type: "action",
        operationName: "updateBlogPipeArticle",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultBlogPipeArticleSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "blogPipeArticle": {
            required: false,
            type: "UpdateBlogPipeArticleInput"
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
          "bulkUpdateBlogPipeArticles",
          DefaultBlogPipeArticleSelection,
          "blogPipeArticle",
          "blogPipeArticles",
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
        operationName: "bulkUpdateBlogPipeArticles",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "blogPipeArticles",
        isBulk: true,
        defaultSelection: DefaultBlogPipeArticleSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateBlogPipeArticlesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteBlogPipeArticle,
      {
        type: "action",
        operationName: "deleteBlogPipeArticle",
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
          "bulkDeleteBlogPipeArticles",
          null,
          "blogPipeArticle",
          "blogPipeArticles",
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
        operationName: "bulkDeleteBlogPipeArticles",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "blogPipeArticles",
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
  BlogPipeArticleManager,
  DefaultBlogPipeArticleSelection
};
//# sourceMappingURL=BlogPipeArticle.js.map
