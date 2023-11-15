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
      ShopifyDiscount,
      ShopifyDiscountSort,
      ShopifyDiscountFilter,
      AvailableShopifyDiscountSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyDiscountSelection = {
  "__typename": true,
  "appDiscountType": true,
  "appliesOnOneTimePurchase": true,
  "appliesOnSubscription": true,
  "appliesOncePerCustomer": true,
  "asyncUsageCount": true,
  "codeCount": true,
  "combinesWith": true,
  "createdAt": true,
  "destinationSelection": true,
  "discountClass": true,
  "discountId": true,
  "endsAt": true,
  "errorHistory": true,
  "hasTimelineComment": true,
  "id": true,
  "maximumShippingPrice": true,
  "minimumRequirement": true,
  "recurringCycleLimit": true,
  "shareableUrls": true,
  "shopifyCreatedAt": true,
  "shortSummary": true,
  "startsAt": true,
  "status": true,
  "summary": true,
  "title": true,
  "totalSales": true,
  "updatedAt": true,
  "usageLimit": true,
  "usesPerOrderLimit": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyDiscount". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyDiscountOrDefault<Options extends Selectable<AvailableShopifyDiscountSelection>> = DeepFilterNever<
  Select<
    ShopifyDiscount,
    DefaultSelection<
      AvailableShopifyDiscountSelection,
      Options,
      typeof DefaultShopifyDiscountSelection
    >
  >>;

/** Options that can be passed to the `ShopifyDiscountManager#findOne` method */
export interface FindOneShopifyDiscountOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountSelection;
};

/** Options that can be passed to the `ShopifyDiscountManager#maybeFindOne` method */
export interface MaybeFindOneShopifyDiscountOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountSelection;
};

/** Options that can be passed to the `ShopifyDiscountManager#findMany` method */
export interface FindManyShopifyDiscountsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDiscountSort | ShopifyDiscountSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDiscountFilter | ShopifyDiscountFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyDiscountManager#findFirst` method */
export interface FindFirstShopifyDiscountOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDiscountSort | ShopifyDiscountSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDiscountFilter | ShopifyDiscountFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyDiscountManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyDiscountOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDiscountSort | ShopifyDiscountSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDiscountFilter | ShopifyDiscountFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyDiscount";
const pluralApiIdentifier = "shopifyDiscounts";





/** All the actions available at the collection level and record level for "shopifyDiscount" */
export class ShopifyDiscountManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyDiscount by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyDiscountOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDiscountOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyDiscount";
  modelApiIdentifier: "shopifyDiscount";
  defaultSelection: typeof DefaultShopifyDiscountSelection;
  selectionType: AvailableShopifyDiscountSelection;
  optionsType: FindOneShopifyDiscountOptions;
  schemaType: Query["shopifyDiscount"];
} = Object.assign(
  async <Options extends FindOneShopifyDiscountOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDiscountOptions>) => {
    return await findOneRunner<SelectedShopifyDiscountOrDefault<Options>>(
      this,
      "shopifyDiscount",
      id,
      DefaultShopifyDiscountSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyDiscount",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDiscountSelection,
  } as any
)

  
    /**
 * Finds one shopifyDiscount by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyDiscountOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDiscountOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyDiscount";
  modelApiIdentifier: "shopifyDiscount";
  defaultSelection: typeof DefaultShopifyDiscountSelection;
  selectionType: AvailableShopifyDiscountSelection;
  optionsType: MaybeFindOneShopifyDiscountOptions;
  schemaType: Query["shopifyDiscount"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyDiscountOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDiscountOptions>) => {
    const record = await findOneRunner<SelectedShopifyDiscountOrDefault<Options>>(
      this,
      "shopifyDiscount",
      id,
      DefaultShopifyDiscountSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyDiscount",
    modelApiIdentifier: "shopifyDiscount",
    defaultSelection: DefaultShopifyDiscountSelection,
  } as any
)

  
    /**
 * Finds many shopifyDiscount. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyDiscountsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDiscountsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDiscountOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyDiscounts";
  modelApiIdentifier: "shopifyDiscount";
  defaultSelection: typeof DefaultShopifyDiscountSelection;
  selectionType: AvailableShopifyDiscountSelection;
  optionsType: FindManyShopifyDiscountsOptions;
  schemaType: Query["shopifyDiscount"];
} = Object.assign(
  async <Options extends FindManyShopifyDiscountsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDiscountsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDiscountOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyDiscountOrDefault<Options>>(
      this,
      "shopifyDiscounts",
      DefaultShopifyDiscountSelection,
      "shopifyDiscount",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyDiscounts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDiscountSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDiscount. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyDiscountOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDiscountOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyDiscounts";
  modelApiIdentifier: "shopifyDiscount";
  defaultSelection: typeof DefaultShopifyDiscountSelection;
  selectionType: AvailableShopifyDiscountSelection;
  optionsType: FindFirstShopifyDiscountOptions;
  schemaType: Query["shopifyDiscount"];
} = Object.assign(
  async <Options extends FindFirstShopifyDiscountOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDiscountOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDiscountOrDefault<Options>>(
      this,
      "shopifyDiscounts",
      DefaultShopifyDiscountSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyDiscounts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDiscountSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDiscount. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyDiscountOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDiscountOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyDiscounts";
  modelApiIdentifier: "shopifyDiscount";
  defaultSelection: typeof DefaultShopifyDiscountSelection;
  selectionType: AvailableShopifyDiscountSelection;
  optionsType: MaybeFindFirstShopifyDiscountOptions;
  schemaType: Query["shopifyDiscount"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyDiscountOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDiscountOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDiscountOrDefault<Options>>(
      this,
      "shopifyDiscounts",
      DefaultShopifyDiscountSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyDiscounts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDiscountSelection,
  } as any
);

  
}
