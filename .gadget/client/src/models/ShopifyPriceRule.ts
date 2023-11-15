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
      ShopifyPriceRule,
      ShopifyPriceRuleSort,
      ShopifyPriceRuleFilter,
      AvailableShopifyPriceRuleSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyPriceRuleSelection = {
  "__typename": true,
  "allocationLimit": true,
  "allocationMethod": true,
  "createdAt": true,
  "customerSegmentPrerequisiteIds": true,
  "customerSelection": true,
  "endsAt": true,
  "entitledCollectionIds": true,
  "entitledCountryIds": true,
  "entitledProductIds": true,
  "entitledVariantIds": true,
  "id": true,
  "oncePerCustomer": true,
  "prerequisiteCollectionIds": true,
  "prerequisiteCustomerIds": true,
  "prerequisiteProductIds": true,
  "prerequisiteQuantityRange": true,
  "prerequisiteShippingPriceRange": true,
  "prerequisiteSubtotalRange": true,
  "prerequisiteToEntitlementPurchase": true,
  "prerequisiteToEntitlementQuantityRatio": true,
  "prerequisiteVariants": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "startsAt": true,
  "targetSelection": true,
  "targetType": true,
  "title": true,
  "updatedAt": true,
  "usageLimit": true,
  "value": true,
  "valueType": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyPriceRule". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyPriceRuleOrDefault<Options extends Selectable<AvailableShopifyPriceRuleSelection>> = DeepFilterNever<
  Select<
    ShopifyPriceRule,
    DefaultSelection<
      AvailableShopifyPriceRuleSelection,
      Options,
      typeof DefaultShopifyPriceRuleSelection
    >
  >>;

/** Options that can be passed to the `ShopifyPriceRuleManager#findOne` method */
export interface FindOneShopifyPriceRuleOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPriceRuleSelection;
};

/** Options that can be passed to the `ShopifyPriceRuleManager#maybeFindOne` method */
export interface MaybeFindOneShopifyPriceRuleOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPriceRuleSelection;
};

/** Options that can be passed to the `ShopifyPriceRuleManager#findMany` method */
export interface FindManyShopifyPriceRulesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPriceRuleSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyPriceRuleSort | ShopifyPriceRuleSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyPriceRuleFilter | ShopifyPriceRuleFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyPriceRuleManager#findFirst` method */
export interface FindFirstShopifyPriceRuleOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPriceRuleSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyPriceRuleSort | ShopifyPriceRuleSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyPriceRuleFilter | ShopifyPriceRuleFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyPriceRuleManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyPriceRuleOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPriceRuleSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyPriceRuleSort | ShopifyPriceRuleSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyPriceRuleFilter | ShopifyPriceRuleFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyPriceRule";
const pluralApiIdentifier = "shopifyPriceRules";





/** All the actions available at the collection level and record level for "shopifyPriceRule" */
export class ShopifyPriceRuleManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyPriceRule by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyPriceRuleOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyPriceRuleOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPriceRuleOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyPriceRule";
  modelApiIdentifier: "shopifyPriceRule";
  defaultSelection: typeof DefaultShopifyPriceRuleSelection;
  selectionType: AvailableShopifyPriceRuleSelection;
  optionsType: FindOneShopifyPriceRuleOptions;
  schemaType: Query["shopifyPriceRule"];
} = Object.assign(
  async <Options extends FindOneShopifyPriceRuleOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyPriceRuleOptions>) => {
    return await findOneRunner<SelectedShopifyPriceRuleOrDefault<Options>>(
      this,
      "shopifyPriceRule",
      id,
      DefaultShopifyPriceRuleSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyPriceRule",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPriceRuleSelection,
  } as any
)

  
    /**
 * Finds one shopifyPriceRule by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyPriceRuleOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyPriceRuleOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPriceRuleOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyPriceRule";
  modelApiIdentifier: "shopifyPriceRule";
  defaultSelection: typeof DefaultShopifyPriceRuleSelection;
  selectionType: AvailableShopifyPriceRuleSelection;
  optionsType: MaybeFindOneShopifyPriceRuleOptions;
  schemaType: Query["shopifyPriceRule"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyPriceRuleOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyPriceRuleOptions>) => {
    const record = await findOneRunner<SelectedShopifyPriceRuleOrDefault<Options>>(
      this,
      "shopifyPriceRule",
      id,
      DefaultShopifyPriceRuleSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyPriceRule",
    modelApiIdentifier: "shopifyPriceRule",
    defaultSelection: DefaultShopifyPriceRuleSelection,
  } as any
)

  
    /**
 * Finds many shopifyPriceRule. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyPriceRulesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyPriceRulesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyPriceRuleOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyPriceRules";
  modelApiIdentifier: "shopifyPriceRule";
  defaultSelection: typeof DefaultShopifyPriceRuleSelection;
  selectionType: AvailableShopifyPriceRuleSelection;
  optionsType: FindManyShopifyPriceRulesOptions;
  schemaType: Query["shopifyPriceRule"];
} = Object.assign(
  async <Options extends FindManyShopifyPriceRulesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyPriceRulesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyPriceRuleOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyPriceRuleOrDefault<Options>>(
      this,
      "shopifyPriceRules",
      DefaultShopifyPriceRuleSelection,
      "shopifyPriceRule",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyPriceRules",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPriceRuleSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyPriceRule. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyPriceRuleOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyPriceRuleOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPriceRuleOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyPriceRules";
  modelApiIdentifier: "shopifyPriceRule";
  defaultSelection: typeof DefaultShopifyPriceRuleSelection;
  selectionType: AvailableShopifyPriceRuleSelection;
  optionsType: FindFirstShopifyPriceRuleOptions;
  schemaType: Query["shopifyPriceRule"];
} = Object.assign(
  async <Options extends FindFirstShopifyPriceRuleOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyPriceRuleOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPriceRuleOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyPriceRuleOrDefault<Options>>(
      this,
      "shopifyPriceRules",
      DefaultShopifyPriceRuleSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyPriceRules",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPriceRuleSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyPriceRule. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyPriceRuleOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyPriceRuleOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPriceRuleOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyPriceRules";
  modelApiIdentifier: "shopifyPriceRule";
  defaultSelection: typeof DefaultShopifyPriceRuleSelection;
  selectionType: AvailableShopifyPriceRuleSelection;
  optionsType: MaybeFindFirstShopifyPriceRuleOptions;
  schemaType: Query["shopifyPriceRule"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyPriceRuleOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyPriceRuleOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPriceRuleOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyPriceRuleOrDefault<Options>>(
      this,
      "shopifyPriceRules",
      DefaultShopifyPriceRuleSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyPriceRules",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPriceRuleSelection,
  } as any
);

  
}
