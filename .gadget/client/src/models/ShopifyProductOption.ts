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
      ShopifyProductOption,
      ShopifyProductOptionSort,
      ShopifyProductOptionFilter,
      AvailableShopifyProductOptionSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyProductOptionSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "position": true,
  "updatedAt": true,
  "values": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyProductOption". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyProductOptionOrDefault<Options extends Selectable<AvailableShopifyProductOptionSelection>> = DeepFilterNever<
  Select<
    ShopifyProductOption,
    DefaultSelection<
      AvailableShopifyProductOptionSelection,
      Options,
      typeof DefaultShopifyProductOptionSelection
    >
  >>;

/** Options that can be passed to the `ShopifyProductOptionManager#findOne` method */
export interface FindOneShopifyProductOptionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductOptionSelection;
};

/** Options that can be passed to the `ShopifyProductOptionManager#maybeFindOne` method */
export interface MaybeFindOneShopifyProductOptionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductOptionSelection;
};

/** Options that can be passed to the `ShopifyProductOptionManager#findMany` method */
export interface FindManyShopifyProductOptionsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductOptionSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyProductOptionSort | ShopifyProductOptionSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyProductOptionFilter | ShopifyProductOptionFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyProductOptionManager#findFirst` method */
export interface FindFirstShopifyProductOptionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductOptionSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyProductOptionSort | ShopifyProductOptionSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyProductOptionFilter | ShopifyProductOptionFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyProductOptionManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyProductOptionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyProductOptionSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyProductOptionSort | ShopifyProductOptionSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyProductOptionFilter | ShopifyProductOptionFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyProductOption";
const pluralApiIdentifier = "shopifyProductOptions";





/** All the actions available at the collection level and record level for "shopifyProductOption" */
export class ShopifyProductOptionManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyProductOption by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyProductOptionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProductOptionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOptionOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyProductOption";
  modelApiIdentifier: "shopifyProductOption";
  defaultSelection: typeof DefaultShopifyProductOptionSelection;
  selectionType: AvailableShopifyProductOptionSelection;
  optionsType: FindOneShopifyProductOptionOptions;
  schemaType: Query["shopifyProductOption"];
} = Object.assign(
  async <Options extends FindOneShopifyProductOptionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProductOptionOptions>) => {
    return await findOneRunner<SelectedShopifyProductOptionOrDefault<Options>>(
      this,
      "shopifyProductOption",
      id,
      DefaultShopifyProductOptionSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyProductOption",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyProductOptionSelection,
  } as any
)

  
    /**
 * Finds one shopifyProductOption by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyProductOptionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProductOptionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOptionOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyProductOption";
  modelApiIdentifier: "shopifyProductOption";
  defaultSelection: typeof DefaultShopifyProductOptionSelection;
  selectionType: AvailableShopifyProductOptionSelection;
  optionsType: MaybeFindOneShopifyProductOptionOptions;
  schemaType: Query["shopifyProductOption"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyProductOptionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProductOptionOptions>) => {
    const record = await findOneRunner<SelectedShopifyProductOptionOrDefault<Options>>(
      this,
      "shopifyProductOption",
      id,
      DefaultShopifyProductOptionSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyProductOption",
    modelApiIdentifier: "shopifyProductOption",
    defaultSelection: DefaultShopifyProductOptionSelection,
  } as any
)

  
    /**
 * Finds many shopifyProductOption. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyProductOptionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProductOptionsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyProductOptionOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyProductOptions";
  modelApiIdentifier: "shopifyProductOption";
  defaultSelection: typeof DefaultShopifyProductOptionSelection;
  selectionType: AvailableShopifyProductOptionSelection;
  optionsType: FindManyShopifyProductOptionsOptions;
  schemaType: Query["shopifyProductOption"];
} = Object.assign(
  async <Options extends FindManyShopifyProductOptionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProductOptionsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyProductOptionOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyProductOptionOrDefault<Options>>(
      this,
      "shopifyProductOptions",
      DefaultShopifyProductOptionSelection,
      "shopifyProductOption",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyProductOptions",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyProductOptionSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyProductOption. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyProductOptionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProductOptionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOptionOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyProductOptions";
  modelApiIdentifier: "shopifyProductOption";
  defaultSelection: typeof DefaultShopifyProductOptionSelection;
  selectionType: AvailableShopifyProductOptionSelection;
  optionsType: FindFirstShopifyProductOptionOptions;
  schemaType: Query["shopifyProductOption"];
} = Object.assign(
  async <Options extends FindFirstShopifyProductOptionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProductOptionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOptionOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyProductOptionOrDefault<Options>>(
      this,
      "shopifyProductOptions",
      DefaultShopifyProductOptionSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyProductOptions",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyProductOptionSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyProductOption. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyProductOptionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProductOptionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOptionOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyProductOptions";
  modelApiIdentifier: "shopifyProductOption";
  defaultSelection: typeof DefaultShopifyProductOptionSelection;
  selectionType: AvailableShopifyProductOptionSelection;
  optionsType: MaybeFindFirstShopifyProductOptionOptions;
  schemaType: Query["shopifyProductOption"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyProductOptionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProductOptionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyProductOptionOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyProductOptionOrDefault<Options>>(
      this,
      "shopifyProductOptions",
      DefaultShopifyProductOptionSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyProductOptions",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyProductOptionSelection,
  } as any
);

  
}
