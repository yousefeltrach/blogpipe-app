import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyDiscountCode, ShopifyDiscountCodeSort, ShopifyDiscountCodeFilter, AvailableShopifyDiscountCodeSelection } from "../types.js";
export declare const DefaultShopifyDiscountCodeSelection: {
    readonly __typename: true;
    readonly code: true;
    readonly createdAt: true;
    readonly id: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly updatedAt: true;
    readonly usageCount: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyDiscountCode". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyDiscountCodeOrDefault<Options extends Selectable<AvailableShopifyDiscountCodeSelection>> = DeepFilterNever<Select<ShopifyDiscountCode, DefaultSelection<AvailableShopifyDiscountCodeSelection, Options, typeof DefaultShopifyDiscountCodeSelection>>>;
/** Options that can be passed to the `ShopifyDiscountCodeManager#findOne` method */
export interface FindOneShopifyDiscountCodeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDiscountCodeSelection;
}
/** Options that can be passed to the `ShopifyDiscountCodeManager#maybeFindOne` method */
export interface MaybeFindOneShopifyDiscountCodeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDiscountCodeSelection;
}
/** Options that can be passed to the `ShopifyDiscountCodeManager#findMany` method */
export interface FindManyShopifyDiscountCodesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDiscountCodeSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDiscountCodeSort | ShopifyDiscountCodeSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDiscountCodeFilter | ShopifyDiscountCodeFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyDiscountCodeManager#findFirst` method */
export interface FindFirstShopifyDiscountCodeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDiscountCodeSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDiscountCodeSort | ShopifyDiscountCodeSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDiscountCodeFilter | ShopifyDiscountCodeFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyDiscountCodeManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyDiscountCodeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDiscountCodeSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDiscountCodeSort | ShopifyDiscountCodeSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDiscountCodeFilter | ShopifyDiscountCodeFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyDiscountCode" */
export declare class ShopifyDiscountCodeManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyDiscountCode by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyDiscountCodeOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDiscountCodeOptions>): Promise<GadgetRecord<SelectedShopifyDiscountCodeOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyDiscountCode";
        modelApiIdentifier: "shopifyDiscountCode";
        defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
        selectionType: AvailableShopifyDiscountCodeSelection;
        optionsType: FindOneShopifyDiscountCodeOptions;
        schemaType: Query["shopifyDiscountCode"];
    };
    /**
 * Finds one shopifyDiscountCode by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyDiscountCodeOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDiscountCodeOptions>): Promise<GadgetRecord<SelectedShopifyDiscountCodeOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyDiscountCode";
        modelApiIdentifier: "shopifyDiscountCode";
        defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
        selectionType: AvailableShopifyDiscountCodeSelection;
        optionsType: MaybeFindOneShopifyDiscountCodeOptions;
        schemaType: Query["shopifyDiscountCode"];
    };
    /**
 * Finds many shopifyDiscountCode. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyDiscountCodesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDiscountCodesOptions>): Promise<GadgetRecordList<SelectedShopifyDiscountCodeOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyDiscountCodes";
        modelApiIdentifier: "shopifyDiscountCode";
        defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
        selectionType: AvailableShopifyDiscountCodeSelection;
        optionsType: FindManyShopifyDiscountCodesOptions;
        schemaType: Query["shopifyDiscountCode"];
    };
    /**
 * Finds the first matching shopifyDiscountCode. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyDiscountCodeOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDiscountCodeOptions>): Promise<GadgetRecord<SelectedShopifyDiscountCodeOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyDiscountCodes";
        modelApiIdentifier: "shopifyDiscountCode";
        defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
        selectionType: AvailableShopifyDiscountCodeSelection;
        optionsType: FindFirstShopifyDiscountCodeOptions;
        schemaType: Query["shopifyDiscountCode"];
    };
    /**
 * Finds the first matching shopifyDiscountCode. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyDiscountCodeOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDiscountCodeOptions>): Promise<GadgetRecord<SelectedShopifyDiscountCodeOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyDiscountCodes";
        modelApiIdentifier: "shopifyDiscountCode";
        defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
        selectionType: AvailableShopifyDiscountCodeSelection;
        optionsType: MaybeFindFirstShopifyDiscountCodeOptions;
        schemaType: Query["shopifyDiscountCode"];
    };
}
