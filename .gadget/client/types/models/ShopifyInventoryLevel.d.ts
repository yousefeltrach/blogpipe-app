import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyInventoryLevel, ShopifyInventoryLevelSort, ShopifyInventoryLevelFilter, AvailableShopifyInventoryLevelSelection } from "../types.js";
export declare const DefaultShopifyInventoryLevelSelection: {
    readonly __typename: true;
    readonly available: true;
    readonly createdAt: true;
    readonly id: true;
    readonly shopifyUpdatedAt: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyInventoryLevel". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyInventoryLevelOrDefault<Options extends Selectable<AvailableShopifyInventoryLevelSelection>> = DeepFilterNever<Select<ShopifyInventoryLevel, DefaultSelection<AvailableShopifyInventoryLevelSelection, Options, typeof DefaultShopifyInventoryLevelSelection>>>;
/** Options that can be passed to the `ShopifyInventoryLevelManager#findOne` method */
export interface FindOneShopifyInventoryLevelOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyInventoryLevelSelection;
}
/** Options that can be passed to the `ShopifyInventoryLevelManager#maybeFindOne` method */
export interface MaybeFindOneShopifyInventoryLevelOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyInventoryLevelSelection;
}
/** Options that can be passed to the `ShopifyInventoryLevelManager#findMany` method */
export interface FindManyShopifyInventoryLevelsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyInventoryLevelSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyInventoryLevelSort | ShopifyInventoryLevelSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyInventoryLevelFilter | ShopifyInventoryLevelFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyInventoryLevelManager#findFirst` method */
export interface FindFirstShopifyInventoryLevelOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyInventoryLevelSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyInventoryLevelSort | ShopifyInventoryLevelSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyInventoryLevelFilter | ShopifyInventoryLevelFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyInventoryLevelManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyInventoryLevelOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyInventoryLevelSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyInventoryLevelSort | ShopifyInventoryLevelSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyInventoryLevelFilter | ShopifyInventoryLevelFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyInventoryLevel" */
export declare class ShopifyInventoryLevelManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyInventoryLevel by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyInventoryLevelOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>): Promise<GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyInventoryLevel";
        modelApiIdentifier: "shopifyInventoryLevel";
        defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
        selectionType: AvailableShopifyInventoryLevelSelection;
        optionsType: FindOneShopifyInventoryLevelOptions;
        schemaType: Query["shopifyInventoryLevel"];
    };
    /**
 * Finds one shopifyInventoryLevel by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyInventoryLevelOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyInventoryLevelOptions>): Promise<GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyInventoryLevel";
        modelApiIdentifier: "shopifyInventoryLevel";
        defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
        selectionType: AvailableShopifyInventoryLevelSelection;
        optionsType: MaybeFindOneShopifyInventoryLevelOptions;
        schemaType: Query["shopifyInventoryLevel"];
    };
    /**
 * Finds many shopifyInventoryLevel. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyInventoryLevelsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyInventoryLevelsOptions>): Promise<GadgetRecordList<SelectedShopifyInventoryLevelOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyInventoryLevels";
        modelApiIdentifier: "shopifyInventoryLevel";
        defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
        selectionType: AvailableShopifyInventoryLevelSelection;
        optionsType: FindManyShopifyInventoryLevelsOptions;
        schemaType: Query["shopifyInventoryLevel"];
    };
    /**
 * Finds the first matching shopifyInventoryLevel. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyInventoryLevelOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyInventoryLevelOptions>): Promise<GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyInventoryLevels";
        modelApiIdentifier: "shopifyInventoryLevel";
        defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
        selectionType: AvailableShopifyInventoryLevelSelection;
        optionsType: FindFirstShopifyInventoryLevelOptions;
        schemaType: Query["shopifyInventoryLevel"];
    };
    /**
 * Finds the first matching shopifyInventoryLevel. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyInventoryLevelOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyInventoryLevelOptions>): Promise<GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyInventoryLevels";
        modelApiIdentifier: "shopifyInventoryLevel";
        defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
        selectionType: AvailableShopifyInventoryLevelSelection;
        optionsType: MaybeFindFirstShopifyInventoryLevelOptions;
        schemaType: Query["shopifyInventoryLevel"];
    };
    /**
  * Finds one shopifyInventoryLevel by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneShopifyInventoryLevelOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>): Promise<GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyInventoryLevels";
        modelApiIdentifier: "shopifyInventoryLevel";
        defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
        selectionType: AvailableShopifyInventoryLevelSelection;
        optionsType: FindOneShopifyInventoryLevelOptions;
        schemaType: Query["shopifyInventoryLevel"];
    };
    /**
  * Finds one shopifyInventoryLevel by its inventoryItem. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findByInventoryItem: {
        <Options extends FindOneShopifyInventoryLevelOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>): Promise<GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "inventoryItem";
        operationName: "shopifyInventoryLevels";
        modelApiIdentifier: "shopifyInventoryLevel";
        defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
        selectionType: AvailableShopifyInventoryLevelSelection;
        optionsType: FindOneShopifyInventoryLevelOptions;
        schemaType: Query["shopifyInventoryLevel"];
    };
}
