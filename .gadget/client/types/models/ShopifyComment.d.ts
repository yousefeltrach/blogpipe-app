import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyComment, ShopifyCommentSort, ShopifyCommentFilter, AvailableShopifyCommentSelection } from "../types.js";
export declare const DefaultShopifyCommentSelection: {
    readonly __typename: true;
    readonly author: true;
    readonly body: true;
    readonly bodyHtml: true;
    readonly createdAt: true;
    readonly email: true;
    readonly id: true;
    readonly ip: true;
    readonly publishedAt: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly status: true;
    readonly updatedAt: true;
    readonly userAgent: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyComment". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCommentOrDefault<Options extends Selectable<AvailableShopifyCommentSelection>> = DeepFilterNever<Select<ShopifyComment, DefaultSelection<AvailableShopifyCommentSelection, Options, typeof DefaultShopifyCommentSelection>>>;
/** Options that can be passed to the `ShopifyCommentManager#findOne` method */
export interface FindOneShopifyCommentOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCommentSelection;
}
/** Options that can be passed to the `ShopifyCommentManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCommentOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCommentSelection;
}
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
}
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
}
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
}
/** All the actions available at the collection level and record level for "shopifyComment" */
export declare class ShopifyCommentManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyComment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyCommentOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCommentOptions>): Promise<GadgetRecord<SelectedShopifyCommentOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyComment";
        modelApiIdentifier: "shopifyComment";
        defaultSelection: typeof DefaultShopifyCommentSelection;
        selectionType: AvailableShopifyCommentSelection;
        optionsType: FindOneShopifyCommentOptions;
        schemaType: Query["shopifyComment"];
    };
    /**
 * Finds one shopifyComment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyCommentOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCommentOptions>): Promise<GadgetRecord<SelectedShopifyCommentOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyComment";
        modelApiIdentifier: "shopifyComment";
        defaultSelection: typeof DefaultShopifyCommentSelection;
        selectionType: AvailableShopifyCommentSelection;
        optionsType: MaybeFindOneShopifyCommentOptions;
        schemaType: Query["shopifyComment"];
    };
    /**
 * Finds many shopifyComment. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyCommentsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCommentsOptions>): Promise<GadgetRecordList<SelectedShopifyCommentOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyComments";
        modelApiIdentifier: "shopifyComment";
        defaultSelection: typeof DefaultShopifyCommentSelection;
        selectionType: AvailableShopifyCommentSelection;
        optionsType: FindManyShopifyCommentsOptions;
        schemaType: Query["shopifyComment"];
    };
    /**
 * Finds the first matching shopifyComment. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyCommentOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCommentOptions>): Promise<GadgetRecord<SelectedShopifyCommentOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyComments";
        modelApiIdentifier: "shopifyComment";
        defaultSelection: typeof DefaultShopifyCommentSelection;
        selectionType: AvailableShopifyCommentSelection;
        optionsType: FindFirstShopifyCommentOptions;
        schemaType: Query["shopifyComment"];
    };
    /**
 * Finds the first matching shopifyComment. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyCommentOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCommentOptions>): Promise<GadgetRecord<SelectedShopifyCommentOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyComments";
        modelApiIdentifier: "shopifyComment";
        defaultSelection: typeof DefaultShopifyCommentSelection;
        selectionType: AvailableShopifyCommentSelection;
        optionsType: MaybeFindFirstShopifyCommentOptions;
        schemaType: Query["shopifyComment"];
    };
}
