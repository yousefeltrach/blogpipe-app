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
      BlogPipeAds,
      BlogPipeAdsSort,
      BlogPipeAdsFilter,
      AvailableBlogPipeAdsSelection,
      CreateBlogPipeAdsInput,
      UpdateBlogPipeAdsInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultBlogPipeAdsSelection = {
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
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "blogPipeAds". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedBlogPipeAdsOrDefault<Options extends Selectable<AvailableBlogPipeAdsSelection>> = DeepFilterNever<
  Select<
    BlogPipeAds,
    DefaultSelection<
      AvailableBlogPipeAdsSelection,
      Options,
      typeof DefaultBlogPipeAdsSelection
    >
  >>;

/** Options that can be passed to the `BlogPipeAdsManager#findOne` method */
export interface FindOneBlogPipeAdsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeAdsSelection;
};

/** Options that can be passed to the `BlogPipeAdsManager#maybeFindOne` method */
export interface MaybeFindOneBlogPipeAdsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeAdsSelection;
};

/** Options that can be passed to the `BlogPipeAdsManager#findMany` method */
export interface FindManyBlogPipeAdssOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeAdsSelection;
  /** Return records sorted by these sorts */
  sort?: BlogPipeAdsSort | BlogPipeAdsSort[] | null;
  /** Only return records matching these filters. */
  filter?: BlogPipeAdsFilter | BlogPipeAdsFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `BlogPipeAdsManager#findFirst` method */
export interface FindFirstBlogPipeAdsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeAdsSelection;
  /** Return records sorted by these sorts */
  sort?: BlogPipeAdsSort | BlogPipeAdsSort[] | null;
  /** Only return records matching these filters. */
  filter?: BlogPipeAdsFilter | BlogPipeAdsFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `BlogPipeAdsManager#maybeFindFirst` method */
export interface MaybeFindFirstBlogPipeAdsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeAdsSelection;
  /** Return records sorted by these sorts */
  sort?: BlogPipeAdsSort | BlogPipeAdsSort[] | null;
  /** Only return records matching these filters. */
  filter?: BlogPipeAdsFilter | BlogPipeAdsFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateBlogPipeAdsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeAdsSelection;
};


export interface UpdateBlogPipeAdsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBlogPipeAdsSelection;
};


export interface DeleteBlogPipeAdsOptions {
};


const apiIdentifier = "blogPipeAds";
const pluralApiIdentifier = "blogPipeAdss";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateBlogPipeAdsVariables = {
          blogPipeAds?: CreateBlogPipeAdsInput,
      }

  /**
   * The inputs for executing create on blogPipeAds.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateBlogPipeAdsVariables = CreateBlogPipeAdsInput;



/**
 * The return value from executing create on blogPipeAds.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateBlogPipeAdsResult<Options extends CreateBlogPipeAdsOptions> =
  SelectedBlogPipeAdsOrDefault<Options> extends void ? void : GadgetRecord<SelectedBlogPipeAdsOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createBlogPipeAds<Options extends CreateBlogPipeAdsOptions>(
  
    variables: CreateBlogPipeAdsVariables,

  options?: LimitToKnownKeys<Options, CreateBlogPipeAdsOptions>
): Promise<CreateBlogPipeAdsResult<Options>>;

// Fully qualified, nested api identifier overload
async function createBlogPipeAds<Options extends CreateBlogPipeAdsOptions>(
  
      variables: FullyQualifiedCreateBlogPipeAdsVariables,
  
  options?: LimitToKnownKeys<Options, CreateBlogPipeAdsOptions>
): Promise<CreateBlogPipeAdsResult<Options>>;

// Function implementation
async function createBlogPipeAds<Options extends CreateBlogPipeAdsOptions>(
  this: BlogPipeAdsManager,
  
      variables: CreateBlogPipeAdsVariables | FullyQualifiedCreateBlogPipeAdsVariables,
  
  options?: LimitToKnownKeys<Options, CreateBlogPipeAdsOptions>
): Promise<CreateBlogPipeAdsResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedBlogPipeAdsOrDefault<Options>>(
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
          type: "CreateBlogPipeAdsInput",
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
  export type FullyQualifiedUpdateBlogPipeAdsVariables = {
          blogPipeAds?: UpdateBlogPipeAdsInput,
      }

  /**
   * The inputs for executing update on blogPipeAds.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateBlogPipeAdsVariables = UpdateBlogPipeAdsInput;



/**
 * The return value from executing update on blogPipeAds.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateBlogPipeAdsResult<Options extends UpdateBlogPipeAdsOptions> =
  SelectedBlogPipeAdsOrDefault<Options> extends void ? void : GadgetRecord<SelectedBlogPipeAdsOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateBlogPipeAds<Options extends UpdateBlogPipeAdsOptions>(
  id: string,
    variables: UpdateBlogPipeAdsVariables,

  options?: LimitToKnownKeys<Options, UpdateBlogPipeAdsOptions>
): Promise<UpdateBlogPipeAdsResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateBlogPipeAds<Options extends UpdateBlogPipeAdsOptions>(
  id: string,
      variables: FullyQualifiedUpdateBlogPipeAdsVariables,
  
  options?: LimitToKnownKeys<Options, UpdateBlogPipeAdsOptions>
): Promise<UpdateBlogPipeAdsResult<Options>>;

// Function implementation
async function updateBlogPipeAds<Options extends UpdateBlogPipeAdsOptions>(
  this: BlogPipeAdsManager,
  id: string,
      variables: UpdateBlogPipeAdsVariables | FullyQualifiedUpdateBlogPipeAdsVariables,
  
  options?: LimitToKnownKeys<Options, UpdateBlogPipeAdsOptions>
): Promise<UpdateBlogPipeAdsResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedBlogPipeAdsOrDefault<Options>>(
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
          type: "GadgetID",
        },
                    "blogPipeAds": {
          value: newVariables.blogPipeAds,
          required: false,
          type: "UpdateBlogPipeAdsInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on blogPipeAds.
 * "Is void because this action deletes the record"
 **/
export type DeleteBlogPipeAdsResult<Options extends DeleteBlogPipeAdsOptions> =
  void extends void ? void : GadgetRecord<SelectedBlogPipeAdsOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteBlogPipeAds<Options extends DeleteBlogPipeAdsOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteBlogPipeAdsOptions>
): Promise<DeleteBlogPipeAdsResult<Options>>;

// Function implementation
async function deleteBlogPipeAds<Options extends DeleteBlogPipeAdsOptions>(
  this: BlogPipeAdsManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteBlogPipeAdsOptions>
): Promise<DeleteBlogPipeAdsResult<Options>> {

  return (await actionRunner<void>(
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
          type: "GadgetID",
        },
                },
    options,
    null,
    false
  ));
}

  



/** All the actions available at the collection level and record level for "blogPipeAds" */
export class BlogPipeAdsManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one blogPipeAds by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneBlogPipeAdsOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeAdsOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeAdsOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "blogPipeAds";
  modelApiIdentifier: "blogPipeAds";
  defaultSelection: typeof DefaultBlogPipeAdsSelection;
  selectionType: AvailableBlogPipeAdsSelection;
  optionsType: FindOneBlogPipeAdsOptions;
  schemaType: Query["blogPipeAds"];
} = Object.assign(
  async <Options extends FindOneBlogPipeAdsOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeAdsOptions>) => {
    return await findOneRunner<SelectedBlogPipeAdsOrDefault<Options>>(
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
    defaultSelection: DefaultBlogPipeAdsSelection,
  } as any
)

  
    /**
 * Finds one blogPipeAds by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneBlogPipeAdsOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneBlogPipeAdsOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeAdsOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "blogPipeAds";
  modelApiIdentifier: "blogPipeAds";
  defaultSelection: typeof DefaultBlogPipeAdsSelection;
  selectionType: AvailableBlogPipeAdsSelection;
  optionsType: MaybeFindOneBlogPipeAdsOptions;
  schemaType: Query["blogPipeAds"];
} = Object.assign(
  async <Options extends MaybeFindOneBlogPipeAdsOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneBlogPipeAdsOptions>) => {
    const record = await findOneRunner<SelectedBlogPipeAdsOrDefault<Options>>(
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
    defaultSelection: DefaultBlogPipeAdsSelection,
  } as any
)

  
    /**
 * Finds many blogPipeAds. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyBlogPipeAdssOptions>(options?: LimitToKnownKeys<Options, FindManyBlogPipeAdssOptions>):
    Promise<
      GadgetRecordList<
        SelectedBlogPipeAdsOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "blogPipeAdss";
  modelApiIdentifier: "blogPipeAds";
  defaultSelection: typeof DefaultBlogPipeAdsSelection;
  selectionType: AvailableBlogPipeAdsSelection;
  optionsType: FindManyBlogPipeAdssOptions;
  schemaType: Query["blogPipeAds"];
} = Object.assign(
  async <Options extends FindManyBlogPipeAdssOptions>(options?: LimitToKnownKeys<Options, FindManyBlogPipeAdssOptions>):
    Promise<
      GadgetRecordList<
        SelectedBlogPipeAdsOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedBlogPipeAdsOrDefault<Options>>(
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
    defaultSelection: DefaultBlogPipeAdsSelection,
  } as any
);

  
    /**
 * Finds the first matching blogPipeAds. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstBlogPipeAdsOptions>(options?: LimitToKnownKeys<Options, FindFirstBlogPipeAdsOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeAdsOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "blogPipeAdss";
  modelApiIdentifier: "blogPipeAds";
  defaultSelection: typeof DefaultBlogPipeAdsSelection;
  selectionType: AvailableBlogPipeAdsSelection;
  optionsType: FindFirstBlogPipeAdsOptions;
  schemaType: Query["blogPipeAds"];
} = Object.assign(
  async <Options extends FindFirstBlogPipeAdsOptions>(options?: LimitToKnownKeys<Options, FindFirstBlogPipeAdsOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeAdsOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedBlogPipeAdsOrDefault<Options>>(
      this,
      "blogPipeAdss",
      DefaultBlogPipeAdsSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "blogPipeAdss",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultBlogPipeAdsSelection,
  } as any
);

  
    /**
 * Finds the first matching blogPipeAds. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstBlogPipeAdsOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstBlogPipeAdsOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeAdsOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "blogPipeAdss";
  modelApiIdentifier: "blogPipeAds";
  defaultSelection: typeof DefaultBlogPipeAdsSelection;
  selectionType: AvailableBlogPipeAdsSelection;
  optionsType: MaybeFindFirstBlogPipeAdsOptions;
  schemaType: Query["blogPipeAds"];
} = Object.assign(
  async <Options extends MaybeFindFirstBlogPipeAdsOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstBlogPipeAdsOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeAdsOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedBlogPipeAdsOrDefault<Options>>(
      this,
      "blogPipeAdss",
      DefaultBlogPipeAdsSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "blogPipeAdss",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultBlogPipeAdsSelection,
  } as any
);

  
    /**
  * Finds one blogPipeAds by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneBlogPipeAdsOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeAdsOptions>):
    Promise<
      GadgetRecord<
        SelectedBlogPipeAdsOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "blogPipeAdss";
  modelApiIdentifier: "blogPipeAds";
  defaultSelection: typeof DefaultBlogPipeAdsSelection;
  selectionType: AvailableBlogPipeAdsSelection;
  optionsType: FindOneBlogPipeAdsOptions;
  schemaType: Query["blogPipeAds"];
} = Object.assign(
  async <Options extends FindOneBlogPipeAdsOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeAdsOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedBlogPipeAdsOrDefault<Options>
      > & SelectedBlogPipeAdsOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedBlogPipeAdsOrDefault<Options>>(
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
    defaultSelection: DefaultBlogPipeAdsSelection,
  } as any
)

  
    create = Object.assign(createBlogPipeAds,
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
        type: "CreateBlogPipeAdsInput",
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
    operationName: "createBlogPipeAds";
    namespace: null;
    modelApiIdentifier: "blogPipeAds";
    modelSelectionField: "blogPipeAds";
    isBulk: false;
    defaultSelection: typeof DefaultBlogPipeAdsSelection;
    selectionType: AvailableBlogPipeAdsSelection;
    optionsType: CreateBlogPipeAdsOptions;
    schemaType:  Query["blogPipeAds"];

    variablesType: (

      (
        FullyQualifiedCreateBlogPipeAdsVariables          | CreateBlogPipeAdsVariables      )
    ) | undefined;
    variables: {
                    "blogPipeAds": {
          required: false;
          type: "CreateBlogPipeAdsInput";
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
    <Options extends CreateBlogPipeAdsOptions>(
        inputs: (FullyQualifiedCreateBlogPipeAdsVariables | CreateBlogPipeAdsVariables)[],
      options?: LimitToKnownKeys<Options, CreateBlogPipeAdsOptions>
    ): Promise<CreateBlogPipeAdsResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateBlogPipeAds";
    namespace: null;
    modelApiIdentifier: "blogPipeAds";
    modelSelectionField: "blogPipeAds";
    isBulk: true;
    defaultSelection: typeof DefaultBlogPipeAdsSelection;
    selectionType: AvailableBlogPipeAdsSelection;
    optionsType: CreateBlogPipeAdsOptions;
    schemaType: Query["blogPipeAds"];
    variablesType: (FullyQualifiedCreateBlogPipeAdsVariables | CreateBlogPipeAdsVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateBlogPipeAdsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateBlogPipeAdsOptions>(
        inputs: (FullyQualifiedCreateBlogPipeAdsVariables | CreateBlogPipeAdsVariables)[],
      options?: LimitToKnownKeys<Options, CreateBlogPipeAdsOptions>
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[BulkCreateBlogPipeAdsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateBlogPipeAds,
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
        type: "GadgetID",
      },
      "blogPipeAds": {
        required: false,
        type: "UpdateBlogPipeAdsInput",
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
    operationName: "updateBlogPipeAds";
    namespace: null;
    modelApiIdentifier: "blogPipeAds";
    modelSelectionField: "blogPipeAds";
    isBulk: false;
    defaultSelection: typeof DefaultBlogPipeAdsSelection;
    selectionType: AvailableBlogPipeAdsSelection;
    optionsType: UpdateBlogPipeAdsOptions;
    schemaType:  Query["blogPipeAds"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateBlogPipeAdsVariables          | UpdateBlogPipeAdsVariables      )
    ) | undefined;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "blogPipeAds": {
          required: false;
          type: "UpdateBlogPipeAdsInput";
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
    <Options extends UpdateBlogPipeAdsOptions>(
        inputs: (FullyQualifiedUpdateBlogPipeAdsVariables | UpdateBlogPipeAdsVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateBlogPipeAdsOptions>
    ): Promise<UpdateBlogPipeAdsResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateBlogPipeAds";
    namespace: null;
    modelApiIdentifier: "blogPipeAds";
    modelSelectionField: "blogPipeAds";
    isBulk: true;
    defaultSelection: typeof DefaultBlogPipeAdsSelection;
    selectionType: AvailableBlogPipeAdsSelection;
    optionsType: UpdateBlogPipeAdsOptions;
    schemaType: Query["blogPipeAds"];
    variablesType: (FullyQualifiedUpdateBlogPipeAdsVariables | UpdateBlogPipeAdsVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateBlogPipeAdsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateBlogPipeAdsOptions>(
        inputs: (FullyQualifiedUpdateBlogPipeAdsVariables | UpdateBlogPipeAdsVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateBlogPipeAdsOptions>
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[BulkUpdateBlogPipeAdsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteBlogPipeAds,
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
    operationName: "deleteBlogPipeAds";
    namespace: null;
    modelApiIdentifier: "blogPipeAds";
    modelSelectionField: "blogPipeAds";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteBlogPipeAdsOptions;
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
    <Options extends DeleteBlogPipeAdsOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteBlogPipeAdsOptions>
    ): Promise<DeleteBlogPipeAdsResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteBlogPipeAds";
    namespace: null;
    modelApiIdentifier: "blogPipeAds";
    modelSelectionField: "blogPipeAds";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteBlogPipeAdsOptions;
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
    async <Options extends DeleteBlogPipeAdsOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteBlogPipeAdsOptions>
    ) => {

      return (await actionRunner<any>(
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[GadgetID!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: false,
    } as any
  );

  
}
