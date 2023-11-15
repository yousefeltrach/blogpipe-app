import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyPage, ShopifyPageSort, ShopifyPageFilter, AvailableShopifyPageSelection } from "../types.js";
export declare const DefaultShopifyPageSelection: {
    readonly __typename: true;
    readonly author: true;
    readonly body: true;
    readonly createdAt: true;
    readonly handle: true;
    readonly id: true;
    readonly publishedAt: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly templateSuffix: true;
    readonly title: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyPage". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyPageOrDefault<Options extends Selectable<AvailableShopifyPageSelection>> = DeepFilterNever<Select<ShopifyPage, DefaultSelection<AvailableShopifyPageSelection, Options, typeof DefaultShopifyPageSelection>>>;
/** Options that can be passed to the `ShopifyPageManager#findOne` method */
export interface FindOneShopifyPageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPageSelection;
}
/** Options that can be passed to the `ShopifyPageManager#maybeFindOne` method */
export interface MaybeFindOneShopifyPageOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPageSelection;
}
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
}
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
}
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
}
/** All the actions available at the collection level and record level for "shopifyPage" */
export declare class ShopifyPageManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyPage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyPageOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyPageOptions>): Promise<GadgetRecord<SelectedShopifyPageOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyPage";
        modelApiIdentifier: "shopifyPage";
        defaultSelection: typeof DefaultShopifyPageSelection;
        selectionType: AvailableShopifyPageSelection;
        optionsType: FindOneShopifyPageOptions;
        schemaType: Query["shopifyPage"];
    };
    /**
 * Finds one shopifyPage by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyPageOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyPageOptions>): Promise<GadgetRecord<SelectedShopifyPageOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyPage";
        modelApiIdentifier: "shopifyPage";
        defaultSelection: typeof DefaultShopifyPageSelection;
        selectionType: AvailableShopifyPageSelection;
        optionsType: MaybeFindOneShopifyPageOptions;
        schemaType: Query["shopifyPage"];
    };
    /**
 * Finds many shopifyPage. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyPagesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyPagesOptions>): Promise<GadgetRecordList<SelectedShopifyPageOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyPages";
        modelApiIdentifier: "shopifyPage";
        defaultSelection: typeof DefaultShopifyPageSelection;
        selectionType: AvailableShopifyPageSelection;
        optionsType: FindManyShopifyPagesOptions;
        schemaType: Query["shopifyPage"];
    };
    /**
 * Finds the first matching shopifyPage. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyPageOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyPageOptions>): Promise<GadgetRecord<SelectedShopifyPageOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyPages";
        modelApiIdentifier: "shopifyPage";
        defaultSelection: typeof DefaultShopifyPageSelection;
        selectionType: AvailableShopifyPageSelection;
        optionsType: FindFirstShopifyPageOptions;
        schemaType: Query["shopifyPage"];
    };
    /**
 * Finds the first matching shopifyPage. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyPageOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyPageOptions>): Promise<GadgetRecord<SelectedShopifyPageOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyPages";
        modelApiIdentifier: "shopifyPage";
        defaultSelection: typeof DefaultShopifyPageSelection;
        selectionType: AvailableShopifyPageSelection;
        optionsType: MaybeFindFirstShopifyPageOptions;
        schemaType: Query["shopifyPage"];
    };
}
