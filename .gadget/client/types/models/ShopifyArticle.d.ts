import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyArticle, ShopifyArticleSort, ShopifyArticleFilter, AvailableShopifyArticleSelection } from "../types.js";
export declare const DefaultShopifyArticleSelection: {
    readonly __typename: true;
    readonly author: true;
    readonly body: true;
    readonly createdAt: true;
    readonly handle: true;
    readonly id: true;
    readonly image: true;
    readonly published: true;
    readonly publishedAt: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly status: true;
    readonly summary: true;
    readonly tags: true;
    readonly templateSuffix: true;
    readonly title: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyArticle". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyArticleOrDefault<Options extends Selectable<AvailableShopifyArticleSelection>> = DeepFilterNever<Select<ShopifyArticle, DefaultSelection<AvailableShopifyArticleSelection, Options, typeof DefaultShopifyArticleSelection>>>;
/** Options that can be passed to the `ShopifyArticleManager#findOne` method */
export interface FindOneShopifyArticleOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyArticleSelection;
}
/** Options that can be passed to the `ShopifyArticleManager#maybeFindOne` method */
export interface MaybeFindOneShopifyArticleOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyArticleSelection;
}
/** Options that can be passed to the `ShopifyArticleManager#findMany` method */
export interface FindManyShopifyArticlesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyArticleSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyArticleSort | ShopifyArticleSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyArticleFilter | ShopifyArticleFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyArticleManager#findFirst` method */
export interface FindFirstShopifyArticleOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyArticleSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyArticleSort | ShopifyArticleSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyArticleFilter | ShopifyArticleFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyArticleManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyArticleOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyArticleSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyArticleSort | ShopifyArticleSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyArticleFilter | ShopifyArticleFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyArticle" */
export declare class ShopifyArticleManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyArticle by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyArticleOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyArticleOptions>): Promise<GadgetRecord<SelectedShopifyArticleOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyArticle";
        modelApiIdentifier: "shopifyArticle";
        defaultSelection: typeof DefaultShopifyArticleSelection;
        selectionType: AvailableShopifyArticleSelection;
        optionsType: FindOneShopifyArticleOptions;
        schemaType: Query["shopifyArticle"];
    };
    /**
 * Finds one shopifyArticle by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyArticleOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyArticleOptions>): Promise<GadgetRecord<SelectedShopifyArticleOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyArticle";
        modelApiIdentifier: "shopifyArticle";
        defaultSelection: typeof DefaultShopifyArticleSelection;
        selectionType: AvailableShopifyArticleSelection;
        optionsType: MaybeFindOneShopifyArticleOptions;
        schemaType: Query["shopifyArticle"];
    };
    /**
 * Finds many shopifyArticle. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyArticlesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyArticlesOptions>): Promise<GadgetRecordList<SelectedShopifyArticleOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyArticles";
        modelApiIdentifier: "shopifyArticle";
        defaultSelection: typeof DefaultShopifyArticleSelection;
        selectionType: AvailableShopifyArticleSelection;
        optionsType: FindManyShopifyArticlesOptions;
        schemaType: Query["shopifyArticle"];
    };
    /**
 * Finds the first matching shopifyArticle. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyArticleOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyArticleOptions>): Promise<GadgetRecord<SelectedShopifyArticleOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyArticles";
        modelApiIdentifier: "shopifyArticle";
        defaultSelection: typeof DefaultShopifyArticleSelection;
        selectionType: AvailableShopifyArticleSelection;
        optionsType: FindFirstShopifyArticleOptions;
        schemaType: Query["shopifyArticle"];
    };
    /**
 * Finds the first matching shopifyArticle. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyArticleOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyArticleOptions>): Promise<GadgetRecord<SelectedShopifyArticleOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyArticles";
        modelApiIdentifier: "shopifyArticle";
        defaultSelection: typeof DefaultShopifyArticleSelection;
        selectionType: AvailableShopifyArticleSelection;
        optionsType: MaybeFindFirstShopifyArticleOptions;
        schemaType: Query["shopifyArticle"];
    };
}
