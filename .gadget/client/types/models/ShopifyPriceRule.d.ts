import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyPriceRule, ShopifyPriceRuleSort, ShopifyPriceRuleFilter, AvailableShopifyPriceRuleSelection } from "../types.js";
export declare const DefaultShopifyPriceRuleSelection: {
    readonly __typename: true;
    readonly allocationLimit: true;
    readonly allocationMethod: true;
    readonly createdAt: true;
    readonly customerSegmentPrerequisiteIds: true;
    readonly customerSelection: true;
    readonly endsAt: true;
    readonly entitledCollectionIds: true;
    readonly entitledCountryIds: true;
    readonly entitledProductIds: true;
    readonly entitledVariantIds: true;
    readonly id: true;
    readonly oncePerCustomer: true;
    readonly prerequisiteCollectionIds: true;
    readonly prerequisiteCustomerIds: true;
    readonly prerequisiteProductIds: true;
    readonly prerequisiteQuantityRange: true;
    readonly prerequisiteShippingPriceRange: true;
    readonly prerequisiteSubtotalRange: true;
    readonly prerequisiteToEntitlementPurchase: true;
    readonly prerequisiteToEntitlementQuantityRatio: true;
    readonly prerequisiteVariants: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly startsAt: true;
    readonly targetSelection: true;
    readonly targetType: true;
    readonly title: true;
    readonly updatedAt: true;
    readonly usageLimit: true;
    readonly value: true;
    readonly valueType: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyPriceRule". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyPriceRuleOrDefault<Options extends Selectable<AvailableShopifyPriceRuleSelection>> = DeepFilterNever<Select<ShopifyPriceRule, DefaultSelection<AvailableShopifyPriceRuleSelection, Options, typeof DefaultShopifyPriceRuleSelection>>>;
/** Options that can be passed to the `ShopifyPriceRuleManager#findOne` method */
export interface FindOneShopifyPriceRuleOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPriceRuleSelection;
}
/** Options that can be passed to the `ShopifyPriceRuleManager#maybeFindOne` method */
export interface MaybeFindOneShopifyPriceRuleOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPriceRuleSelection;
}
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
}
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
}
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
}
/** All the actions available at the collection level and record level for "shopifyPriceRule" */
export declare class ShopifyPriceRuleManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyPriceRule by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyPriceRuleOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyPriceRuleOptions>): Promise<GadgetRecord<SelectedShopifyPriceRuleOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyPriceRule";
        modelApiIdentifier: "shopifyPriceRule";
        defaultSelection: typeof DefaultShopifyPriceRuleSelection;
        selectionType: AvailableShopifyPriceRuleSelection;
        optionsType: FindOneShopifyPriceRuleOptions;
        schemaType: Query["shopifyPriceRule"];
    };
    /**
 * Finds one shopifyPriceRule by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyPriceRuleOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyPriceRuleOptions>): Promise<GadgetRecord<SelectedShopifyPriceRuleOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyPriceRule";
        modelApiIdentifier: "shopifyPriceRule";
        defaultSelection: typeof DefaultShopifyPriceRuleSelection;
        selectionType: AvailableShopifyPriceRuleSelection;
        optionsType: MaybeFindOneShopifyPriceRuleOptions;
        schemaType: Query["shopifyPriceRule"];
    };
    /**
 * Finds many shopifyPriceRule. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyPriceRulesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyPriceRulesOptions>): Promise<GadgetRecordList<SelectedShopifyPriceRuleOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyPriceRules";
        modelApiIdentifier: "shopifyPriceRule";
        defaultSelection: typeof DefaultShopifyPriceRuleSelection;
        selectionType: AvailableShopifyPriceRuleSelection;
        optionsType: FindManyShopifyPriceRulesOptions;
        schemaType: Query["shopifyPriceRule"];
    };
    /**
 * Finds the first matching shopifyPriceRule. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyPriceRuleOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyPriceRuleOptions>): Promise<GadgetRecord<SelectedShopifyPriceRuleOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyPriceRules";
        modelApiIdentifier: "shopifyPriceRule";
        defaultSelection: typeof DefaultShopifyPriceRuleSelection;
        selectionType: AvailableShopifyPriceRuleSelection;
        optionsType: FindFirstShopifyPriceRuleOptions;
        schemaType: Query["shopifyPriceRule"];
    };
    /**
 * Finds the first matching shopifyPriceRule. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyPriceRuleOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyPriceRuleOptions>): Promise<GadgetRecord<SelectedShopifyPriceRuleOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyPriceRules";
        modelApiIdentifier: "shopifyPriceRule";
        defaultSelection: typeof DefaultShopifyPriceRuleSelection;
        selectionType: AvailableShopifyPriceRuleSelection;
        optionsType: MaybeFindFirstShopifyPriceRuleOptions;
        schemaType: Query["shopifyPriceRule"];
    };
}
