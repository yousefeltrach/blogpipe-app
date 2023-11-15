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
      ShopifyEvent,
      ShopifyEventSort,
      ShopifyEventFilter,
      AvailableShopifyEventSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyEventSelection = {
  "__typename": true,
  "arguments": true,
  "author": true,
  "body": true,
  "createdAt": true,
  "description": true,
  "id": true,
  "message": true,
  "path": true,
  "shopifyCreatedAt": true,
  "subjectId": true,
  "subjectType": true,
  "updatedAt": true,
  "verb": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyEvent". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyEventOrDefault<Options extends Selectable<AvailableShopifyEventSelection>> = DeepFilterNever<
  Select<
    ShopifyEvent,
    DefaultSelection<
      AvailableShopifyEventSelection,
      Options,
      typeof DefaultShopifyEventSelection
    >
  >>;

/** Options that can be passed to the `ShopifyEventManager#findOne` method */
export interface FindOneShopifyEventOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyEventSelection;
};

/** Options that can be passed to the `ShopifyEventManager#maybeFindOne` method */
export interface MaybeFindOneShopifyEventOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyEventSelection;
};

/** Options that can be passed to the `ShopifyEventManager#findMany` method */
export interface FindManyShopifyEventsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyEventSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyEventSort | ShopifyEventSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyEventFilter | ShopifyEventFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyEventManager#findFirst` method */
export interface FindFirstShopifyEventOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyEventSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyEventSort | ShopifyEventSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyEventFilter | ShopifyEventFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyEventManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyEventOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyEventSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyEventSort | ShopifyEventSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyEventFilter | ShopifyEventFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyEvent";
const pluralApiIdentifier = "shopifyEvents";





/** All the actions available at the collection level and record level for "shopifyEvent" */
export class ShopifyEventManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyEvent by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyEventOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyEventOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyEventOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyEvent";
  modelApiIdentifier: "shopifyEvent";
  defaultSelection: typeof DefaultShopifyEventSelection;
  selectionType: AvailableShopifyEventSelection;
  optionsType: FindOneShopifyEventOptions;
  schemaType: Query["shopifyEvent"];
} = Object.assign(
  async <Options extends FindOneShopifyEventOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyEventOptions>) => {
    return await findOneRunner<SelectedShopifyEventOrDefault<Options>>(
      this,
      "shopifyEvent",
      id,
      DefaultShopifyEventSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyEvent",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyEventSelection,
  } as any
)

  
    /**
 * Finds one shopifyEvent by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyEventOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyEventOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyEventOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyEvent";
  modelApiIdentifier: "shopifyEvent";
  defaultSelection: typeof DefaultShopifyEventSelection;
  selectionType: AvailableShopifyEventSelection;
  optionsType: MaybeFindOneShopifyEventOptions;
  schemaType: Query["shopifyEvent"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyEventOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyEventOptions>) => {
    const record = await findOneRunner<SelectedShopifyEventOrDefault<Options>>(
      this,
      "shopifyEvent",
      id,
      DefaultShopifyEventSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyEvent",
    modelApiIdentifier: "shopifyEvent",
    defaultSelection: DefaultShopifyEventSelection,
  } as any
)

  
    /**
 * Finds many shopifyEvent. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyEventsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyEventsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyEventOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyEvents";
  modelApiIdentifier: "shopifyEvent";
  defaultSelection: typeof DefaultShopifyEventSelection;
  selectionType: AvailableShopifyEventSelection;
  optionsType: FindManyShopifyEventsOptions;
  schemaType: Query["shopifyEvent"];
} = Object.assign(
  async <Options extends FindManyShopifyEventsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyEventsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyEventOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyEventOrDefault<Options>>(
      this,
      "shopifyEvents",
      DefaultShopifyEventSelection,
      "shopifyEvent",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyEvents",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyEventSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyEvent. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyEventOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyEventOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyEventOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyEvents";
  modelApiIdentifier: "shopifyEvent";
  defaultSelection: typeof DefaultShopifyEventSelection;
  selectionType: AvailableShopifyEventSelection;
  optionsType: FindFirstShopifyEventOptions;
  schemaType: Query["shopifyEvent"];
} = Object.assign(
  async <Options extends FindFirstShopifyEventOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyEventOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyEventOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyEventOrDefault<Options>>(
      this,
      "shopifyEvents",
      DefaultShopifyEventSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyEvents",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyEventSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyEvent. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyEventOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyEventOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyEventOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyEvents";
  modelApiIdentifier: "shopifyEvent";
  defaultSelection: typeof DefaultShopifyEventSelection;
  selectionType: AvailableShopifyEventSelection;
  optionsType: MaybeFindFirstShopifyEventOptions;
  schemaType: Query["shopifyEvent"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyEventOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyEventOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyEventOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyEventOrDefault<Options>>(
      this,
      "shopifyEvents",
      DefaultShopifyEventSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyEvents",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyEventSelection,
  } as any
);

  
}
