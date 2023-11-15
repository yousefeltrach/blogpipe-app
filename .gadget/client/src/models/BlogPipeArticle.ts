import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
  IDsList,
      BlogPipeArticle,
      BlogPipeArticleSort,
      BlogPipeArticleFilter,
      AvailableBlogPipeArticleSelection,
      CreateBlogPipeArticleInput,
      UpdateBlogPipeArticleInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultBlogPipeArticleSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "status": true,
  "title": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "blogPipeArticle". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedBlogPipeArticleOrDefault<Options extends Selectable<AvailableBlogPipeArticleSelection>> = DeepFilterNever<
  Select<
    BlogPipeArticle,
    DefaultSelection<
      AvailableBlogPipeArticleSelection,
      Options,
      typeof DefaultBlogPipeArticleSelection
    >
  >>;

/** Options that can be passed to the `BlogPipeArticleManager#findOne` method */
export interface FindOneBlogPipeArticleOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeArticleSelection;
};

/** Options that can be passed to the `BlogPipeArticleManager#maybeFindOne` method */
export interface MaybeFindOneBlogPipeArticleOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeArticleSelection;
};

/** Options that can be passed to the `BlogPipeArticleManager#findMany` method */
export interface FindManyBlogPipeArticlesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeArticleSelection;
  /** Return records sorted by these sorts */
  sort?: BlogPipeArticleSort | BlogPipeArticleSort[] | null;
  /** Only return records matching these filters. */
  filter?: BlogPipeArticleFilter | BlogPipeArticleFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `BlogPipeArticleManager#findFirst` method */
export interface FindFirstBlogPipeArticleOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeArticleSelection;
  /** Return records sorted by these sorts */
  sort?: BlogPipeArticleSort | BlogPipeArticleSort[] | null;
  /** Only return records matching these filters. */
  filter?: BlogPipeArticleFilter | BlogPipeArticleFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `BlogPipeArticleManager#maybeFindFirst` method */
export interface MaybeFindFirstBlogPipeArticleOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeArticleSelection;
  /** Return records sorted by these sorts */
  sort?: BlogPipeArticleSort | BlogPipeArticleSort[] | null;
  /** Only return records matching these filters. */
  filter?: BlogPipeArticleFilter | BlogPipeArticleFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateBlogPipeArticleOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeArticleSelection;
};


export interface UpdateBlogPipeArticleOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeArticleSelection;
};


export interface DeleteBlogPipeArticleOptions {
};


const apiIdentifier = "blogPipeArticle";
const pluralApiIdentifier = "blogPipeArticles";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateBlogPipeArticleVariables = {
          blogPipeArticle?: CreateBlogPipeArticleInput,
      }

  /**
   * The inputs for executing create on blogPipeArticle.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateBlogPipeArticleVariables = CreateBlogPipeArticleInput;



/**
 * The return value from executing create on blogPipeArticle.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateBlogPipeArticleResult<Options extends CreateBlogPipeArticleOptions> =
  SelectedBlogPipeArticleOrDefault<Options> extends void ? void : GadgetRecord<SelectedBlogPipeArticleOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createBlogPipeArticle<Options extends CreateBlogPipeArticleOptions>(
  
    variables: CreateBlogPipeArticleVariables,

  options?: LimitToKnownKeys<Options, CreateBlogPipeArticleOptions>
): Promise<CreateBlogPipeArticleResult<Options>>;

// Fully qualified, nested api identifier overload
async function createBlogPipeArticle<Options extends CreateBlogPipeArticleOptions>(
  
      variables: FullyQualifiedCreateBlogPipeArticleVariables,
  
  options?: LimitToKnownKeys<Options, CreateBlogPipeArticleOptions>
): Promise<CreateBlogPipeArticleResult<Options>>;

// Function implementation
async function createBlogPipeArticle<Options extends CreateBlogPipeArticleOptions>(
  this: BlogPipeArticleManager,
  
      variables: CreateBlogPipeArticleVariables | FullyQualifiedCreateBlogPipeArticleVariables,
  
  options?: LimitToKnownKeys<Options, CreateBlogPipeArticleOptions>
): Promise<CreateBlogPipeArticleResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedBlogPipeArticleOrDefault<Options>>(
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
          type: "CreateBlogPipeArticleInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedUpdateBlogPipeArticleVariables = {
          blogPipeArticle?: UpdateBlogPipeArticleInput,
      }

  /**
   * The inputs for executing update on blogPipeArticle.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateBlogPipeArticleVariables = UpdateBlogPipeArticleInput;



/**
 * The return value from executing update on blogPipeArticle.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateBlogPipeArticleResult<Options extends UpdateBlogPipeArticleOptions> =
  SelectedBlogPipeArticleOrDefault<Options> extends void ? void : GadgetRecord<SelectedBlogPipeArticleOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateBlogPipeArticle<Options extends UpdateBlogPipeArticleOptions>(
  id: string,
    variables: UpdateBlogPipeArticleVariables,

  options?: LimitToKnownKeys<Options, UpdateBlogPipeArticleOptions>
): Promise<UpdateBlogPipeArticleResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateBlogPipeArticle<Options extends UpdateBlogPipeArticleOptions>(
  id: string,
      variables: FullyQualifiedUpdateBlogPipeArticleVariables,
  
  options?: LimitToKnownKeys<Options, UpdateBlogPipeArticleOptions>
): Promise<UpdateBlogPipeArticleResult<Options>>;

// Function implementation
async function updateBlogPipeArticle<Options extends UpdateBlogPipeArticleOptions>(
  this: BlogPipeArticleManager,
  id: string,
      variables: UpdateBlogPipeArticleVariables | FullyQualifiedUpdateBlogPipeArticleVariables,
  
  options?: LimitToKnownKeys<Options, UpdateBlogPipeArticleOptions>
): Promise<UpdateBlogPipeArticleResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedBlogPipeArticleOrDefault<Options>>(
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
          type: "GadgetID",
        },
                    "blogPipeArticle": {
          value: newVariables.blogPipeArticle,
          required: false,
          type: "UpdateBlogPipeArticleInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on blogPipeArticle.
 * "Is void because this action deletes the record"
 **/
export type DeleteBlogPipeArticleResult<Options extends DeleteBlogPipeArticleOptions> =
  void extends void ? void : GadgetRecord<SelectedBlogPipeArticleOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteBlogPipeArticle<Options extends DeleteBlogPipeArticleOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteBlogPipeArticleOptions>
): Promise<DeleteBlogPipeArticleResult<Options>>;

// Function implementation
async function deleteBlogPipeArticle<Options extends DeleteBlogPipeArticleOptions>(
  this: BlogPipeArticleManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteBlogPipeArticleOptions>
): Promise<DeleteBlogPipeArticleResult<Options>> {

  return (await actionRunner<void>(
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
          type: "GadgetID",
        },
                },
    options,
    null,
    false
  ));
}

  



/** All the actions available at the collection level and record level for "blogPipeArticle" */
export class BlogPipeArticleManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one blogPipeArticle by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneBlogPipeArticleOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeArticleOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeArticleOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "blogPipeArticle";
  modelApiIdentifier: "blogPipeArticle";
  defaultSelection: typeof DefaultBlogPipeArticleSelection;
  selectionType: AvailableBlogPipeArticleSelection;
  optionsType: FindOneBlogPipeArticleOptions;
  schemaType: Query["blogPipeArticle"];
} = Object.assign(
  async <Options extends FindOneBlogPipeArticleOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeArticleOptions>) => {
    return await findOneRunner<SelectedBlogPipeArticleOrDefault<Options>>(
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
    defaultSelection: DefaultBlogPipeArticleSelection,
  } as any
)

  
    /**
 * Finds one blogPipeArticle by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneBlogPipeArticleOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneBlogPipeArticleOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeArticleOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "blogPipeArticle";
  modelApiIdentifier: "blogPipeArticle";
  defaultSelection: typeof DefaultBlogPipeArticleSelection;
  selectionType: AvailableBlogPipeArticleSelection;
  optionsType: MaybeFindOneBlogPipeArticleOptions;
  schemaType: Query["blogPipeArticle"];
} = Object.assign(
  async <Options extends MaybeFindOneBlogPipeArticleOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneBlogPipeArticleOptions>) => {
    const record = await findOneRunner<SelectedBlogPipeArticleOrDefault<Options>>(
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
    defaultSelection: DefaultBlogPipeArticleSelection,
  } as any
)

  
    /**
 * Finds many blogPipeArticle. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyBlogPipeArticlesOptions>(options?: LimitToKnownKeys<Options, FindManyBlogPipeArticlesOptions>):
    Promise<
      GadgetRecordList<
        SelectedBlogPipeArticleOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "blogPipeArticles";
  modelApiIdentifier: "blogPipeArticle";
  defaultSelection: typeof DefaultBlogPipeArticleSelection;
  selectionType: AvailableBlogPipeArticleSelection;
  optionsType: FindManyBlogPipeArticlesOptions;
  schemaType: Query["blogPipeArticle"];
} = Object.assign(
  async <Options extends FindManyBlogPipeArticlesOptions>(options?: LimitToKnownKeys<Options, FindManyBlogPipeArticlesOptions>):
    Promise<
      GadgetRecordList<
        SelectedBlogPipeArticleOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedBlogPipeArticleOrDefault<Options>>(
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
    defaultSelection: DefaultBlogPipeArticleSelection,
  } as any
);

  
    /**
 * Finds the first matching blogPipeArticle. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstBlogPipeArticleOptions>(options?: LimitToKnownKeys<Options, FindFirstBlogPipeArticleOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeArticleOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "blogPipeArticles";
  modelApiIdentifier: "blogPipeArticle";
  defaultSelection: typeof DefaultBlogPipeArticleSelection;
  selectionType: AvailableBlogPipeArticleSelection;
  optionsType: FindFirstBlogPipeArticleOptions;
  schemaType: Query["blogPipeArticle"];
} = Object.assign(
  async <Options extends FindFirstBlogPipeArticleOptions>(options?: LimitToKnownKeys<Options, FindFirstBlogPipeArticleOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeArticleOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedBlogPipeArticleOrDefault<Options>>(
      this,
      "blogPipeArticles",
      DefaultBlogPipeArticleSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "blogPipeArticles",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultBlogPipeArticleSelection,
  } as any
);

  
    /**
 * Finds the first matching blogPipeArticle. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstBlogPipeArticleOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstBlogPipeArticleOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeArticleOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "blogPipeArticles";
  modelApiIdentifier: "blogPipeArticle";
  defaultSelection: typeof DefaultBlogPipeArticleSelection;
  selectionType: AvailableBlogPipeArticleSelection;
  optionsType: MaybeFindFirstBlogPipeArticleOptions;
  schemaType: Query["blogPipeArticle"];
} = Object.assign(
  async <Options extends MaybeFindFirstBlogPipeArticleOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstBlogPipeArticleOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeArticleOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedBlogPipeArticleOrDefault<Options>>(
      this,
      "blogPipeArticles",
      DefaultBlogPipeArticleSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "blogPipeArticles",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultBlogPipeArticleSelection,
  } as any
);

  
    /**
  * Finds one blogPipeArticle by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneBlogPipeArticleOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeArticleOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeArticleOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "blogPipeArticles";
  modelApiIdentifier: "blogPipeArticle";
  defaultSelection: typeof DefaultBlogPipeArticleSelection;
  selectionType: AvailableBlogPipeArticleSelection;
  optionsType: FindOneBlogPipeArticleOptions;
  schemaType: Query["blogPipeArticle"];
} = Object.assign(
  async <Options extends FindOneBlogPipeArticleOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeArticleOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedBlogPipeArticleOrDefault<Options>
      > & SelectedBlogPipeArticleOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedBlogPipeArticleOrDefault<Options>>(
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
    defaultSelection: DefaultBlogPipeArticleSelection,
  } as any
)

  
    create = Object.assign(createBlogPipeArticle,
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
        type: "CreateBlogPipeArticleInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as unknown as {
    type: "action";
    operationName: "createBlogPipeArticle";
    namespace: null;
    modelApiIdentifier: "blogPipeArticle";
    modelSelectionField: "blogPipeArticle";
    isBulk: false;
    defaultSelection: typeof DefaultBlogPipeArticleSelection;
    selectionType: AvailableBlogPipeArticleSelection;
    optionsType: CreateBlogPipeArticleOptions;
    schemaType:  Query["blogPipeArticle"];

    variablesType: (

      (
        FullyQualifiedCreateBlogPipeArticleVariables          | CreateBlogPipeArticleVariables      )
    ) | undefined;
    variables: {
                    "blogPipeArticle": {
          required: false;
          type: "CreateBlogPipeArticleInput";
        };
          };
    hasAmbiguousIdentifier: false;
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true;
    paramOnlyVariables: [];
    hasReturnType: false;
    acceptsModelInput: true;
  }
)

  
      /**
  * Executes the bulkCreate action with the given inputs.
  */
  bulkCreate: {
    <Options extends CreateBlogPipeArticleOptions>(
        inputs: (FullyQualifiedCreateBlogPipeArticleVariables | CreateBlogPipeArticleVariables)[],
      options?: LimitToKnownKeys<Options, CreateBlogPipeArticleOptions>
    ): Promise<CreateBlogPipeArticleResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateBlogPipeArticles";
    namespace: null;
    modelApiIdentifier: "blogPipeArticle";
    modelSelectionField: "blogPipeArticles";
    isBulk: true;
    defaultSelection: typeof DefaultBlogPipeArticleSelection;
    selectionType: AvailableBlogPipeArticleSelection;
    optionsType: CreateBlogPipeArticleOptions;
    schemaType: Query["blogPipeArticle"];
    variablesType: (FullyQualifiedCreateBlogPipeArticleVariables | CreateBlogPipeArticleVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateBlogPipeArticlesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateBlogPipeArticleOptions>(
        inputs: (FullyQualifiedCreateBlogPipeArticleVariables | CreateBlogPipeArticleVariables)[],
      options?: LimitToKnownKeys<Options, CreateBlogPipeArticleOptions>
    ) => {
        const fullyQualifiedInputs = inputs.map(input =>
          disambiguateActionParams(
            this["create"],
            undefined,
            input
          )
        );
      
      return (await actionRunner<any>(
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[BulkCreateBlogPipeArticlesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateBlogPipeArticle,
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
        type: "GadgetID",
      },
      "blogPipeArticle": {
        required: false,
        type: "UpdateBlogPipeArticleInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as unknown as {
    type: "action";
    operationName: "updateBlogPipeArticle";
    namespace: null;
    modelApiIdentifier: "blogPipeArticle";
    modelSelectionField: "blogPipeArticle";
    isBulk: false;
    defaultSelection: typeof DefaultBlogPipeArticleSelection;
    selectionType: AvailableBlogPipeArticleSelection;
    optionsType: UpdateBlogPipeArticleOptions;
    schemaType:  Query["blogPipeArticle"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateBlogPipeArticleVariables          | UpdateBlogPipeArticleVariables      )
    ) | undefined;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "blogPipeArticle": {
          required: false;
          type: "UpdateBlogPipeArticleInput";
        };
          };
    hasAmbiguousIdentifier: false;
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true;
    paramOnlyVariables: [];
    hasReturnType: false;
    acceptsModelInput: true;
  }
)

  
      /**
  * Executes the bulkUpdate action with the given inputs.
  */
  bulkUpdate: {
    <Options extends UpdateBlogPipeArticleOptions>(
        inputs: (FullyQualifiedUpdateBlogPipeArticleVariables | UpdateBlogPipeArticleVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateBlogPipeArticleOptions>
    ): Promise<UpdateBlogPipeArticleResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateBlogPipeArticles";
    namespace: null;
    modelApiIdentifier: "blogPipeArticle";
    modelSelectionField: "blogPipeArticles";
    isBulk: true;
    defaultSelection: typeof DefaultBlogPipeArticleSelection;
    selectionType: AvailableBlogPipeArticleSelection;
    optionsType: UpdateBlogPipeArticleOptions;
    schemaType: Query["blogPipeArticle"];
    variablesType: (FullyQualifiedUpdateBlogPipeArticleVariables | UpdateBlogPipeArticleVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateBlogPipeArticlesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateBlogPipeArticleOptions>(
        inputs: (FullyQualifiedUpdateBlogPipeArticleVariables | UpdateBlogPipeArticleVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateBlogPipeArticleOptions>
    ) => {
        const fullyQualifiedInputs = inputs.map(input =>
          disambiguateActionParams(
            this["update"],
            undefined,
            input
          )
        );
      
      return (await actionRunner<any>(
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[BulkUpdateBlogPipeArticlesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteBlogPipeArticle,
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
        type: "GadgetID",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: false,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: false,
  } as unknown as {
    type: "action";
    operationName: "deleteBlogPipeArticle";
    namespace: null;
    modelApiIdentifier: "blogPipeArticle";
    modelSelectionField: "blogPipeArticle";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteBlogPipeArticleOptions;
    schemaType:  null ;

    variablesType: (
        { id: string } &

        {}
    ) | undefined;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                };
    hasAmbiguousIdentifier: false;
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: false;
    paramOnlyVariables: [];
    hasReturnType: false;
    acceptsModelInput: false;
  }
)

  
      /**
  * Executes the bulkDelete action with the given inputs. Deletes the records on the server.
  */
  bulkDelete: {
    <Options extends DeleteBlogPipeArticleOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteBlogPipeArticleOptions>
    ): Promise<DeleteBlogPipeArticleResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteBlogPipeArticles";
    namespace: null;
    modelApiIdentifier: "blogPipeArticle";
    modelSelectionField: "blogPipeArticles";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteBlogPipeArticleOptions;
    schemaType: null;
    variablesType: IDsList | undefined;
    variables: {
        ids: {
          required: true;
          type: "[GadgetID!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends DeleteBlogPipeArticleOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteBlogPipeArticleOptions>
    ) => {

      return (await actionRunner<any>(
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[GadgetID!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: false,
    } as any
  );

  
}
