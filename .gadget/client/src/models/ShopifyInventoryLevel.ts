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
      ShopifyInventoryLevel,
      ShopifyInventoryLevelSort,
      ShopifyInventoryLevelFilter,
      AvailableShopifyInventoryLevelSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyInventoryLevelSelection = {
  "__typename": true,
  "available": true,
  "createdAt": true,
  "id": true,
  "shopifyUpdatedAt": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyInventoryLevel". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyInventoryLevelOrDefault<Options extends Selectable<AvailableShopifyInventoryLevelSelection>> = DeepFilterNever<
  Select<
    ShopifyInventoryLevel,
    DefaultSelection<
      AvailableShopifyInventoryLevelSelection,
      Options,
      typeof DefaultShopifyInventoryLevelSelection
    >
  >>;

/** Options that can be passed to the `ShopifyInventoryLevelManager#findOne` method */
export interface FindOneShopifyInventoryLevelOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryLevelSelection;
};

/** Options that can be passed to the `ShopifyInventoryLevelManager#maybeFindOne` method */
export interface MaybeFindOneShopifyInventoryLevelOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryLevelSelection;
};

/** Options that can be passed to the `ShopifyInventoryLevelManager#findMany` method */
export interface FindManyShopifyInventoryLevelsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryLevelSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyInventoryLevelSort | ShopifyInventoryLevelSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyInventoryLevelFilter | ShopifyInventoryLevelFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyInventoryLevelManager#findFirst` method */
export interface FindFirstShopifyInventoryLevelOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryLevelSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyInventoryLevelSort | ShopifyInventoryLevelSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyInventoryLevelFilter | ShopifyInventoryLevelFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyInventoryLevelManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyInventoryLevelOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryLevelSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyInventoryLevelSort | ShopifyInventoryLevelSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyInventoryLevelFilter | ShopifyInventoryLevelFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyInventoryLevel";
const pluralApiIdentifier = "shopifyInventoryLevels";





/** All the actions available at the collection level and record level for "shopifyInventoryLevel" */
export class ShopifyInventoryLevelManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyInventoryLevel by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyInventoryLevelOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryLevelOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyInventoryLevel";
  modelApiIdentifier: "shopifyInventoryLevel";
  defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
  selectionType: AvailableShopifyInventoryLevelSelection;
  optionsType: FindOneShopifyInventoryLevelOptions;
  schemaType: Query["shopifyInventoryLevel"];
} = Object.assign(
  async <Options extends FindOneShopifyInventoryLevelOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>) => {
    return await findOneRunner<SelectedShopifyInventoryLevelOrDefault<Options>>(
      this,
      "shopifyInventoryLevel",
      id,
      DefaultShopifyInventoryLevelSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyInventoryLevel",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyInventoryLevelSelection,
  } as any
)

  
    /**
 * Finds one shopifyInventoryLevel by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyInventoryLevelOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyInventoryLevelOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryLevelOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyInventoryLevel";
  modelApiIdentifier: "shopifyInventoryLevel";
  defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
  selectionType: AvailableShopifyInventoryLevelSelection;
  optionsType: MaybeFindOneShopifyInventoryLevelOptions;
  schemaType: Query["shopifyInventoryLevel"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyInventoryLevelOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyInventoryLevelOptions>) => {
    const record = await findOneRunner<SelectedShopifyInventoryLevelOrDefault<Options>>(
      this,
      "shopifyInventoryLevel",
      id,
      DefaultShopifyInventoryLevelSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyInventoryLevel",
    modelApiIdentifier: "shopifyInventoryLevel",
    defaultSelection: DefaultShopifyInventoryLevelSelection,
  } as any
)

  
    /**
 * Finds many shopifyInventoryLevel. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyInventoryLevelsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyInventoryLevelsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyInventoryLevelOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyInventoryLevels";
  modelApiIdentifier: "shopifyInventoryLevel";
  defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
  selectionType: AvailableShopifyInventoryLevelSelection;
  optionsType: FindManyShopifyInventoryLevelsOptions;
  schemaType: Query["shopifyInventoryLevel"];
} = Object.assign(
  async <Options extends FindManyShopifyInventoryLevelsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyInventoryLevelsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyInventoryLevelOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyInventoryLevelOrDefault<Options>>(
      this,
      "shopifyInventoryLevels",
      DefaultShopifyInventoryLevelSelection,
      "shopifyInventoryLevel",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyInventoryLevels",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyInventoryLevelSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyInventoryLevel. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyInventoryLevelOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyInventoryLevelOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryLevelOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyInventoryLevels";
  modelApiIdentifier: "shopifyInventoryLevel";
  defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
  selectionType: AvailableShopifyInventoryLevelSelection;
  optionsType: FindFirstShopifyInventoryLevelOptions;
  schemaType: Query["shopifyInventoryLevel"];
} = Object.assign(
  async <Options extends FindFirstShopifyInventoryLevelOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyInventoryLevelOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryLevelOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyInventoryLevelOrDefault<Options>>(
      this,
      "shopifyInventoryLevels",
      DefaultShopifyInventoryLevelSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyInventoryLevels",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyInventoryLevelSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyInventoryLevel. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyInventoryLevelOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyInventoryLevelOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryLevelOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyInventoryLevels";
  modelApiIdentifier: "shopifyInventoryLevel";
  defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
  selectionType: AvailableShopifyInventoryLevelSelection;
  optionsType: MaybeFindFirstShopifyInventoryLevelOptions;
  schemaType: Query["shopifyInventoryLevel"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyInventoryLevelOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyInventoryLevelOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryLevelOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyInventoryLevelOrDefault<Options>>(
      this,
      "shopifyInventoryLevels",
      DefaultShopifyInventoryLevelSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyInventoryLevels",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyInventoryLevelSelection,
  } as any
);

  
    /**
  * Finds one shopifyInventoryLevel by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneShopifyInventoryLevelOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryLevelOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "shopifyInventoryLevels";
  modelApiIdentifier: "shopifyInventoryLevel";
  defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
  selectionType: AvailableShopifyInventoryLevelSelection;
  optionsType: FindOneShopifyInventoryLevelOptions;
  schemaType: Query["shopifyInventoryLevel"];
} = Object.assign(
  async <Options extends FindOneShopifyInventoryLevelOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedShopifyInventoryLevelOrDefault<Options>
      > & SelectedShopifyInventoryLevelOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedShopifyInventoryLevelOrDefault<Options>>(
      this,
      "shopifyInventoryLevels",
      "id",
      value,
      DefaultShopifyInventoryLevelSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyInventoryLevels",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyInventoryLevelSelection,
  } as any
)

  
    /**
  * Finds one shopifyInventoryLevel by its inventoryItem. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findByInventoryItem: {
  <Options extends FindOneShopifyInventoryLevelOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyInventoryLevelOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "inventoryItem";
  operationName: "shopifyInventoryLevels";
  modelApiIdentifier: "shopifyInventoryLevel";
  defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
  selectionType: AvailableShopifyInventoryLevelSelection;
  optionsType: FindOneShopifyInventoryLevelOptions;
  schemaType: Query["shopifyInventoryLevel"];
} = Object.assign(
  async <Options extends FindOneShopifyInventoryLevelOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedShopifyInventoryLevelOrDefault<Options>
      > & SelectedShopifyInventoryLevelOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedShopifyInventoryLevelOrDefault<Options>>(
      this,
      "shopifyInventoryLevels",
      "inventoryItem",
      value,
      DefaultShopifyInventoryLevelSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "inventoryItem",
    operationName: "shopifyInventoryLevels",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyInventoryLevelSelection,
  } as any
)

  
}
