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
      ShopifyFile,
      ShopifyFileSort,
      ShopifyFileFilter,
      AvailableShopifyFileSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyFileSelection = {
  "__typename": true,
  "alt": true,
  "createdAt": true,
  "duration": true,
  "fileErrors": true,
  "fileStatus": true,
  "id": true,
  "image": true,
  "originalFileSize": true,
  "originalSource": true,
  "preview": true,
  "shopifyCreatedAt": true,
  "sources": true,
  "type": true,
  "updatedAt": true,
  "url": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFile". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFileOrDefault<Options extends Selectable<AvailableShopifyFileSelection>> = DeepFilterNever<
  Select<
    ShopifyFile,
    DefaultSelection<
      AvailableShopifyFileSelection,
      Options,
      typeof DefaultShopifyFileSelection
    >
  >>;

/** Options that can be passed to the `ShopifyFileManager#findOne` method */
export interface FindOneShopifyFileOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFileSelection;
};

/** Options that can be passed to the `ShopifyFileManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFileOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFileSelection;
};

/** Options that can be passed to the `ShopifyFileManager#findMany` method */
export interface FindManyShopifyFilesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFileSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFileSort | ShopifyFileSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFileFilter | ShopifyFileFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyFileManager#findFirst` method */
export interface FindFirstShopifyFileOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFileSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFileSort | ShopifyFileSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFileFilter | ShopifyFileFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyFileManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFileOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFileSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFileSort | ShopifyFileSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFileFilter | ShopifyFileFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyFile";
const pluralApiIdentifier = "shopifyFiles";





/** All the actions available at the collection level and record level for "shopifyFile" */
export class ShopifyFileManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyFile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyFileOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFileOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyFile";
  modelApiIdentifier: "shopifyFile";
  defaultSelection: typeof DefaultShopifyFileSelection;
  selectionType: AvailableShopifyFileSelection;
  optionsType: FindOneShopifyFileOptions;
  schemaType: Query["shopifyFile"];
} = Object.assign(
  async <Options extends FindOneShopifyFileOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFileOptions>) => {
    return await findOneRunner<SelectedShopifyFileOrDefault<Options>>(
      this,
      "shopifyFile",
      id,
      DefaultShopifyFileSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFile",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFileSelection,
  } as any
)

  
    /**
 * Finds one shopifyFile by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyFileOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFileOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyFile";
  modelApiIdentifier: "shopifyFile";
  defaultSelection: typeof DefaultShopifyFileSelection;
  selectionType: AvailableShopifyFileSelection;
  optionsType: MaybeFindOneShopifyFileOptions;
  schemaType: Query["shopifyFile"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyFileOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFileOptions>) => {
    const record = await findOneRunner<SelectedShopifyFileOrDefault<Options>>(
      this,
      "shopifyFile",
      id,
      DefaultShopifyFileSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyFile",
    modelApiIdentifier: "shopifyFile",
    defaultSelection: DefaultShopifyFileSelection,
  } as any
)

  
    /**
 * Finds many shopifyFile. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyFilesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFilesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFileOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyFiles";
  modelApiIdentifier: "shopifyFile";
  defaultSelection: typeof DefaultShopifyFileSelection;
  selectionType: AvailableShopifyFileSelection;
  optionsType: FindManyShopifyFilesOptions;
  schemaType: Query["shopifyFile"];
} = Object.assign(
  async <Options extends FindManyShopifyFilesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFilesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFileOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyFileOrDefault<Options>>(
      this,
      "shopifyFiles",
      DefaultShopifyFileSelection,
      "shopifyFile",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyFiles",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFileSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFile. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyFileOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFileOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyFiles";
  modelApiIdentifier: "shopifyFile";
  defaultSelection: typeof DefaultShopifyFileSelection;
  selectionType: AvailableShopifyFileSelection;
  optionsType: FindFirstShopifyFileOptions;
  schemaType: Query["shopifyFile"];
} = Object.assign(
  async <Options extends FindFirstShopifyFileOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFileOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFileOrDefault<Options>>(
      this,
      "shopifyFiles",
      DefaultShopifyFileSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyFiles",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFileSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFile. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyFileOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFileOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyFiles";
  modelApiIdentifier: "shopifyFile";
  defaultSelection: typeof DefaultShopifyFileSelection;
  selectionType: AvailableShopifyFileSelection;
  optionsType: MaybeFindFirstShopifyFileOptions;
  schemaType: Query["shopifyFile"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyFileOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFileOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFileOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFileOrDefault<Options>>(
      this,
      "shopifyFiles",
      DefaultShopifyFileSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyFiles",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFileSelection,
  } as any
);

  
}
