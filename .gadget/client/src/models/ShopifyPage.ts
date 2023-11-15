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
      ShopifyPage,
      ShopifyPageSort,
      ShopifyPageFilter,
      AvailableShopifyPageSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyPageSelection = {
  "__typename": true,
  "author": true,
  "body": true,
  "createdAt": true,
  "handle": true,
  "id": true,
  "publishedAt": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "templateSuffix": true,
  "title": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyPage". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyPageOrDefault<Options extends Selectable<AvailableShopifyPageSelection>> = DeepFilterNever<
  Select<
    ShopifyPage,
    DefaultSelection<
      AvailableShopifyPageSelection,
      Options,
      typeof DefaultShopifyPageSelection
    >
  >>;

/** Options that can be passed to the `ShopifyPageManager#findOne` method */
export interface FindOneShopifyPageOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPageSelection;
};

/** Options that can be passed to the `ShopifyPageManager#maybeFindOne` method */
export interface MaybeFindOneShopifyPageOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPageSelection;
};

/** Options that can be passed to the `ShopifyPageManager#findMany` method */
export interface FindManyShopifyPagesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPageSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyPageSort | ShopifyPageSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyPageFilter | ShopifyPageFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyPageManager#findFirst` method */
export interface FindFirstShopifyPageOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPageSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyPageSort | ShopifyPageSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyPageFilter | ShopifyPageFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyPageManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyPageOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPageSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyPageSort | ShopifyPageSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyPageFilter | ShopifyPageFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyPage";
const pluralApiIdentifier = "shopifyPages";





/** All the actions available at the collection level and record level for "shopifyPage" */
export class ShopifyPageManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyPage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyPageOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyPageOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPageOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyPage";
  modelApiIdentifier: "shopifyPage";
  defaultSelection: typeof DefaultShopifyPageSelection;
  selectionType: AvailableShopifyPageSelection;
  optionsType: FindOneShopifyPageOptions;
  schemaType: Query["shopifyPage"];
} = Object.assign(
  async <Options extends FindOneShopifyPageOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyPageOptions>) => {
    return await findOneRunner<SelectedShopifyPageOrDefault<Options>>(
      this,
      "shopifyPage",
      id,
      DefaultShopifyPageSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyPage",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPageSelection,
  } as any
)

  
    /**
 * Finds one shopifyPage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyPageOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyPageOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPageOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyPage";
  modelApiIdentifier: "shopifyPage";
  defaultSelection: typeof DefaultShopifyPageSelection;
  selectionType: AvailableShopifyPageSelection;
  optionsType: MaybeFindOneShopifyPageOptions;
  schemaType: Query["shopifyPage"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyPageOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyPageOptions>) => {
    const record = await findOneRunner<SelectedShopifyPageOrDefault<Options>>(
      this,
      "shopifyPage",
      id,
      DefaultShopifyPageSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyPage",
    modelApiIdentifier: "shopifyPage",
    defaultSelection: DefaultShopifyPageSelection,
  } as any
)

  
    /**
 * Finds many shopifyPage. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyPagesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyPagesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyPageOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyPages";
  modelApiIdentifier: "shopifyPage";
  defaultSelection: typeof DefaultShopifyPageSelection;
  selectionType: AvailableShopifyPageSelection;
  optionsType: FindManyShopifyPagesOptions;
  schemaType: Query["shopifyPage"];
} = Object.assign(
  async <Options extends FindManyShopifyPagesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyPagesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyPageOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyPageOrDefault<Options>>(
      this,
      "shopifyPages",
      DefaultShopifyPageSelection,
      "shopifyPage",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyPages",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPageSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyPage. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyPageOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyPageOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPageOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyPages";
  modelApiIdentifier: "shopifyPage";
  defaultSelection: typeof DefaultShopifyPageSelection;
  selectionType: AvailableShopifyPageSelection;
  optionsType: FindFirstShopifyPageOptions;
  schemaType: Query["shopifyPage"];
} = Object.assign(
  async <Options extends FindFirstShopifyPageOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyPageOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPageOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyPageOrDefault<Options>>(
      this,
      "shopifyPages",
      DefaultShopifyPageSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyPages",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPageSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyPage. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyPageOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyPageOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPageOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyPages";
  modelApiIdentifier: "shopifyPage";
  defaultSelection: typeof DefaultShopifyPageSelection;
  selectionType: AvailableShopifyPageSelection;
  optionsType: MaybeFindFirstShopifyPageOptions;
  schemaType: Query["shopifyPage"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyPageOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyPageOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPageOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyPageOrDefault<Options>>(
      this,
      "shopifyPages",
      DefaultShopifyPageSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyPages",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPageSelection,
  } as any
);

  
}
