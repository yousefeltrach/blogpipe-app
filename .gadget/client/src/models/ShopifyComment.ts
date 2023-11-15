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
      ShopifyComment,
      ShopifyCommentSort,
      ShopifyCommentFilter,
      AvailableShopifyCommentSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyCommentSelection = {
  "__typename": true,
  "author": true,
  "body": true,
  "bodyHtml": true,
  "createdAt": true,
  "email": true,
  "id": true,
  "ip": true,
  "publishedAt": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "updatedAt": true,
  "userAgent": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyComment". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCommentOrDefault<Options extends Selectable<AvailableShopifyCommentSelection>> = DeepFilterNever<
  Select<
    ShopifyComment,
    DefaultSelection<
      AvailableShopifyCommentSelection,
      Options,
      typeof DefaultShopifyCommentSelection
    >
  >>;

/** Options that can be passed to the `ShopifyCommentManager#findOne` method */
export interface FindOneShopifyCommentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCommentSelection;
};

/** Options that can be passed to the `ShopifyCommentManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCommentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCommentSelection;
};

/** Options that can be passed to the `ShopifyCommentManager#findMany` method */
export interface FindManyShopifyCommentsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCommentSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCommentSort | ShopifyCommentSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCommentFilter | ShopifyCommentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyCommentManager#findFirst` method */
export interface FindFirstShopifyCommentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCommentSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCommentSort | ShopifyCommentSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCommentFilter | ShopifyCommentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyCommentManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCommentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCommentSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCommentSort | ShopifyCommentSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCommentFilter | ShopifyCommentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyComment";
const pluralApiIdentifier = "shopifyComments";





/** All the actions available at the collection level and record level for "shopifyComment" */
export class ShopifyCommentManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyComment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyCommentOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCommentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCommentOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyComment";
  modelApiIdentifier: "shopifyComment";
  defaultSelection: typeof DefaultShopifyCommentSelection;
  selectionType: AvailableShopifyCommentSelection;
  optionsType: FindOneShopifyCommentOptions;
  schemaType: Query["shopifyComment"];
} = Object.assign(
  async <Options extends FindOneShopifyCommentOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCommentOptions>) => {
    return await findOneRunner<SelectedShopifyCommentOrDefault<Options>>(
      this,
      "shopifyComment",
      id,
      DefaultShopifyCommentSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyComment",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCommentSelection,
  } as any
)

  
    /**
 * Finds one shopifyComment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyCommentOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCommentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCommentOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyComment";
  modelApiIdentifier: "shopifyComment";
  defaultSelection: typeof DefaultShopifyCommentSelection;
  selectionType: AvailableShopifyCommentSelection;
  optionsType: MaybeFindOneShopifyCommentOptions;
  schemaType: Query["shopifyComment"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyCommentOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCommentOptions>) => {
    const record = await findOneRunner<SelectedShopifyCommentOrDefault<Options>>(
      this,
      "shopifyComment",
      id,
      DefaultShopifyCommentSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyComment",
    modelApiIdentifier: "shopifyComment",
    defaultSelection: DefaultShopifyCommentSelection,
  } as any
)

  
    /**
 * Finds many shopifyComment. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyCommentsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCommentsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCommentOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyComments";
  modelApiIdentifier: "shopifyComment";
  defaultSelection: typeof DefaultShopifyCommentSelection;
  selectionType: AvailableShopifyCommentSelection;
  optionsType: FindManyShopifyCommentsOptions;
  schemaType: Query["shopifyComment"];
} = Object.assign(
  async <Options extends FindManyShopifyCommentsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCommentsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCommentOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyCommentOrDefault<Options>>(
      this,
      "shopifyComments",
      DefaultShopifyCommentSelection,
      "shopifyComment",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyComments",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCommentSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyComment. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyCommentOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCommentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCommentOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyComments";
  modelApiIdentifier: "shopifyComment";
  defaultSelection: typeof DefaultShopifyCommentSelection;
  selectionType: AvailableShopifyCommentSelection;
  optionsType: FindFirstShopifyCommentOptions;
  schemaType: Query["shopifyComment"];
} = Object.assign(
  async <Options extends FindFirstShopifyCommentOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCommentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCommentOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCommentOrDefault<Options>>(
      this,
      "shopifyComments",
      DefaultShopifyCommentSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyComments",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCommentSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyComment. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyCommentOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCommentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCommentOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyComments";
  modelApiIdentifier: "shopifyComment";
  defaultSelection: typeof DefaultShopifyCommentSelection;
  selectionType: AvailableShopifyCommentSelection;
  optionsType: MaybeFindFirstShopifyCommentOptions;
  schemaType: Query["shopifyComment"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyCommentOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCommentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCommentOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCommentOrDefault<Options>>(
      this,
      "shopifyComments",
      DefaultShopifyCommentSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyComments",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCommentSelection,
  } as any
);

  
}
