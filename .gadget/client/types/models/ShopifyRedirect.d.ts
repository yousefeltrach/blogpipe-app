import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyRedirect, ShopifyRedirectSort, ShopifyRedirectFilter, AvailableShopifyRedirectSelection } from "../types.js";
export declare const DefaultShopifyRedirectSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly path: true;
    readonly target: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyRedirect". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyRedirectOrDefault<Options extends Selectable<AvailableShopifyRedirectSelection>> = DeepFilterNever<Select<ShopifyRedirect, DefaultSelection<AvailableShopifyRedirectSelection, Options, typeof DefaultShopifyRedirectSelection>>>;
/** Options that can be passed to the `ShopifyRedirectManager#findOne` method */
export interface FindOneShopifyRedirectOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRedirectSelection;
}
/** Options that can be passed to the `ShopifyRedirectManager#maybeFindOne` method */
export interface MaybeFindOneShopifyRedirectOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRedirectSelection;
}
/** Options that can be passed to the `ShopifyRedirectManager#findMany` method */
export interface FindManyShopifyRedirectsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRedirectSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyRedirectSort | ShopifyRedirectSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyRedirectFilter | ShopifyRedirectFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyRedirectManager#findFirst` method */
export interface FindFirstShopifyRedirectOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRedirectSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyRedirectSort | ShopifyRedirectSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyRedirectFilter | ShopifyRedirectFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyRedirectManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyRedirectOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRedirectSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyRedirectSort | ShopifyRedirectSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyRedirectFilter | ShopifyRedirectFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyRedirect" */
export declare class ShopifyRedirectManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyRedirect by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyRedirectOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyRedirectOptions>): Promise<GadgetRecord<SelectedShopifyRedirectOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyRedirect";
        modelApiIdentifier: "shopifyRedirect";
        defaultSelection: typeof DefaultShopifyRedirectSelection;
        selectionType: AvailableShopifyRedirectSelection;
        optionsType: FindOneShopifyRedirectOptions;
        schemaType: Query["shopifyRedirect"];
    };
    /**
 * Finds one shopifyRedirect by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyRedirectOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyRedirectOptions>): Promise<GadgetRecord<SelectedShopifyRedirectOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyRedirect";
        modelApiIdentifier: "shopifyRedirect";
        defaultSelection: typeof DefaultShopifyRedirectSelection;
        selectionType: AvailableShopifyRedirectSelection;
        optionsType: MaybeFindOneShopifyRedirectOptions;
        schemaType: Query["shopifyRedirect"];
    };
    /**
 * Finds many shopifyRedirect. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyRedirectsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyRedirectsOptions>): Promise<GadgetRecordList<SelectedShopifyRedirectOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyRedirects";
        modelApiIdentifier: "shopifyRedirect";
        defaultSelection: typeof DefaultShopifyRedirectSelection;
        selectionType: AvailableShopifyRedirectSelection;
        optionsType: FindManyShopifyRedirectsOptions;
        schemaType: Query["shopifyRedirect"];
    };
    /**
 * Finds the first matching shopifyRedirect. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyRedirectOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyRedirectOptions>): Promise<GadgetRecord<SelectedShopifyRedirectOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyRedirects";
        modelApiIdentifier: "shopifyRedirect";
        defaultSelection: typeof DefaultShopifyRedirectSelection;
        selectionType: AvailableShopifyRedirectSelection;
        optionsType: FindFirstShopifyRedirectOptions;
        schemaType: Query["shopifyRedirect"];
    };
    /**
 * Finds the first matching shopifyRedirect. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyRedirectOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyRedirectOptions>): Promise<GadgetRecord<SelectedShopifyRedirectOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyRedirects";
        modelApiIdentifier: "shopifyRedirect";
        defaultSelection: typeof DefaultShopifyRedirectSelection;
        selectionType: AvailableShopifyRedirectSelection;
        optionsType: MaybeFindFirstShopifyRedirectOptions;
        schemaType: Query["shopifyRedirect"];
    };
}
