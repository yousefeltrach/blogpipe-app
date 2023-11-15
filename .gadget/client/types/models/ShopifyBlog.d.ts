import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyBlog, ShopifyBlogSort, ShopifyBlogFilter, AvailableShopifyBlogSelection } from "../types.js";
export declare const DefaultShopifyBlogSelection: {
    readonly __typename: true;
    readonly commentable: true;
    readonly createdAt: true;
    readonly feedburner: true;
    readonly feedburnerLocation: true;
    readonly handle: true;
    readonly id: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly tags: true;
    readonly templateSuffix: true;
    readonly title: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyBlog". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyBlogOrDefault<Options extends Selectable<AvailableShopifyBlogSelection>> = DeepFilterNever<Select<ShopifyBlog, DefaultSelection<AvailableShopifyBlogSelection, Options, typeof DefaultShopifyBlogSelection>>>;
/** Options that can be passed to the `ShopifyBlogManager#findOne` method */
export interface FindOneShopifyBlogOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBlogSelection;
}
/** Options that can be passed to the `ShopifyBlogManager#maybeFindOne` method */
export interface MaybeFindOneShopifyBlogOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBlogSelection;
}
/** Options that can be passed to the `ShopifyBlogManager#findMany` method */
export interface FindManyShopifyBlogsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBlogSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyBlogSort | ShopifyBlogSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyBlogFilter | ShopifyBlogFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyBlogManager#findFirst` method */
export interface FindFirstShopifyBlogOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBlogSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyBlogSort | ShopifyBlogSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyBlogFilter | ShopifyBlogFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyBlogManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyBlogOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBlogSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyBlogSort | ShopifyBlogSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyBlogFilter | ShopifyBlogFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyBlog" */
export declare class ShopifyBlogManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyBlog by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyBlogOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyBlogOptions>): Promise<GadgetRecord<SelectedShopifyBlogOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyBlog";
        modelApiIdentifier: "shopifyBlog";
        defaultSelection: typeof DefaultShopifyBlogSelection;
        selectionType: AvailableShopifyBlogSelection;
        optionsType: FindOneShopifyBlogOptions;
        schemaType: Query["shopifyBlog"];
    };
    /**
 * Finds one shopifyBlog by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyBlogOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyBlogOptions>): Promise<GadgetRecord<SelectedShopifyBlogOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyBlog";
        modelApiIdentifier: "shopifyBlog";
        defaultSelection: typeof DefaultShopifyBlogSelection;
        selectionType: AvailableShopifyBlogSelection;
        optionsType: MaybeFindOneShopifyBlogOptions;
        schemaType: Query["shopifyBlog"];
    };
    /**
 * Finds many shopifyBlog. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyBlogsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyBlogsOptions>): Promise<GadgetRecordList<SelectedShopifyBlogOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyBlogs";
        modelApiIdentifier: "shopifyBlog";
        defaultSelection: typeof DefaultShopifyBlogSelection;
        selectionType: AvailableShopifyBlogSelection;
        optionsType: FindManyShopifyBlogsOptions;
        schemaType: Query["shopifyBlog"];
    };
    /**
 * Finds the first matching shopifyBlog. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyBlogOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyBlogOptions>): Promise<GadgetRecord<SelectedShopifyBlogOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyBlogs";
        modelApiIdentifier: "shopifyBlog";
        defaultSelection: typeof DefaultShopifyBlogSelection;
        selectionType: AvailableShopifyBlogSelection;
        optionsType: FindFirstShopifyBlogOptions;
        schemaType: Query["shopifyBlog"];
    };
    /**
 * Finds the first matching shopifyBlog. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyBlogOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyBlogOptions>): Promise<GadgetRecord<SelectedShopifyBlogOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyBlogs";
        modelApiIdentifier: "shopifyBlog";
        defaultSelection: typeof DefaultShopifyBlogSelection;
        selectionType: AvailableShopifyBlogSelection;
        optionsType: MaybeFindFirstShopifyBlogOptions;
        schemaType: Query["shopifyBlog"];
    };
}
