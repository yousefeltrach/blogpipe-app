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
      ShopifyBlog,
      ShopifyBlogSort,
      ShopifyBlogFilter,
      AvailableShopifyBlogSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyBlogSelection = {
  "__typename": true,
  "commentable": true,
  "createdAt": true,
  "feedburner": true,
  "feedburnerLocation": true,
  "handle": true,
  "id": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "tags": true,
  "templateSuffix": true,
  "title": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyBlog". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyBlogOrDefault<Options extends Selectable<AvailableShopifyBlogSelection>> = DeepFilterNever<
  Select<
    ShopifyBlog,
    DefaultSelection<
      AvailableShopifyBlogSelection,
      Options,
      typeof DefaultShopifyBlogSelection
    >
  >>;

/** Options that can be passed to the `ShopifyBlogManager#findOne` method */
export interface FindOneShopifyBlogOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyBlogSelection;
};

/** Options that can be passed to the `ShopifyBlogManager#maybeFindOne` method */
export interface MaybeFindOneShopifyBlogOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyBlogSelection;
};

/** Options that can be passed to the `ShopifyBlogManager#findMany` method */
export interface FindManyShopifyBlogsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyBlogSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyBlogSort | ShopifyBlogSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyBlogFilter | ShopifyBlogFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyBlogManager#findFirst` method */
export interface FindFirstShopifyBlogOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyBlogSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyBlogSort | ShopifyBlogSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyBlogFilter | ShopifyBlogFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyBlogManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyBlogOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyBlogSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyBlogSort | ShopifyBlogSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyBlogFilter | ShopifyBlogFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyBlog";
const pluralApiIdentifier = "shopifyBlogs";





/** All the actions available at the collection level and record level for "shopifyBlog" */
export class ShopifyBlogManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyBlog by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyBlogOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyBlogOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyBlogOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyBlog";
  modelApiIdentifier: "shopifyBlog";
  defaultSelection: typeof DefaultShopifyBlogSelection;
  selectionType: AvailableShopifyBlogSelection;
  optionsType: FindOneShopifyBlogOptions;
  schemaType: Query["shopifyBlog"];
} = Object.assign(
  async <Options extends FindOneShopifyBlogOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyBlogOptions>) => {
    return await findOneRunner<SelectedShopifyBlogOrDefault<Options>>(
      this,
      "shopifyBlog",
      id,
      DefaultShopifyBlogSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyBlog",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyBlogSelection,
  } as any
)

  
    /**
 * Finds one shopifyBlog by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyBlogOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyBlogOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyBlogOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyBlog";
  modelApiIdentifier: "shopifyBlog";
  defaultSelection: typeof DefaultShopifyBlogSelection;
  selectionType: AvailableShopifyBlogSelection;
  optionsType: MaybeFindOneShopifyBlogOptions;
  schemaType: Query["shopifyBlog"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyBlogOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyBlogOptions>) => {
    const record = await findOneRunner<SelectedShopifyBlogOrDefault<Options>>(
      this,
      "shopifyBlog",
      id,
      DefaultShopifyBlogSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyBlog",
    modelApiIdentifier: "shopifyBlog",
    defaultSelection: DefaultShopifyBlogSelection,
  } as any
)

  
    /**
 * Finds many shopifyBlog. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyBlogsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyBlogsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyBlogOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyBlogs";
  modelApiIdentifier: "shopifyBlog";
  defaultSelection: typeof DefaultShopifyBlogSelection;
  selectionType: AvailableShopifyBlogSelection;
  optionsType: FindManyShopifyBlogsOptions;
  schemaType: Query["shopifyBlog"];
} = Object.assign(
  async <Options extends FindManyShopifyBlogsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyBlogsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyBlogOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyBlogOrDefault<Options>>(
      this,
      "shopifyBlogs",
      DefaultShopifyBlogSelection,
      "shopifyBlog",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyBlogs",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyBlogSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyBlog. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyBlogOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyBlogOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyBlogOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyBlogs";
  modelApiIdentifier: "shopifyBlog";
  defaultSelection: typeof DefaultShopifyBlogSelection;
  selectionType: AvailableShopifyBlogSelection;
  optionsType: FindFirstShopifyBlogOptions;
  schemaType: Query["shopifyBlog"];
} = Object.assign(
  async <Options extends FindFirstShopifyBlogOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyBlogOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyBlogOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyBlogOrDefault<Options>>(
      this,
      "shopifyBlogs",
      DefaultShopifyBlogSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyBlogs",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyBlogSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyBlog. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyBlogOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyBlogOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyBlogOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyBlogs";
  modelApiIdentifier: "shopifyBlog";
  defaultSelection: typeof DefaultShopifyBlogSelection;
  selectionType: AvailableShopifyBlogSelection;
  optionsType: MaybeFindFirstShopifyBlogOptions;
  schemaType: Query["shopifyBlog"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyBlogOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyBlogOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyBlogOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyBlogOrDefault<Options>>(
      this,
      "shopifyBlogs",
      DefaultShopifyBlogSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyBlogs",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyBlogSelection,
  } as any
);

  
}
