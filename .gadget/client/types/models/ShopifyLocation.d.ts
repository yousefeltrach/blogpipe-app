import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyLocation, ShopifyLocationSort, ShopifyLocationFilter, AvailableShopifyLocationSelection } from "../types.js";
export declare const DefaultShopifyLocationSelection: {
    readonly __typename: true;
    readonly active: true;
    readonly address1: true;
    readonly address2: true;
    readonly city: true;
    readonly country: true;
    readonly countryCode: true;
    readonly createdAt: true;
    readonly id: true;
    readonly legacy: true;
    readonly localizedCountryName: true;
    readonly localizedProvinceName: true;
    readonly name: true;
    readonly phone: true;
    readonly province: true;
    readonly provinceCode: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly updatedAt: true;
    readonly zipCode: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyLocation". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyLocationOrDefault<Options extends Selectable<AvailableShopifyLocationSelection>> = DeepFilterNever<Select<ShopifyLocation, DefaultSelection<AvailableShopifyLocationSelection, Options, typeof DefaultShopifyLocationSelection>>>;
/** Options that can be passed to the `ShopifyLocationManager#findOne` method */
export interface FindOneShopifyLocationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyLocationSelection;
}
/** Options that can be passed to the `ShopifyLocationManager#maybeFindOne` method */
export interface MaybeFindOneShopifyLocationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyLocationSelection;
}
/** Options that can be passed to the `ShopifyLocationManager#findMany` method */
export interface FindManyShopifyLocationsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyLocationSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyLocationSort | ShopifyLocationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyLocationFilter | ShopifyLocationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyLocationManager#findFirst` method */
export interface FindFirstShopifyLocationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyLocationSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyLocationSort | ShopifyLocationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyLocationFilter | ShopifyLocationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyLocationManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyLocationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyLocationSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyLocationSort | ShopifyLocationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyLocationFilter | ShopifyLocationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyLocation" */
export declare class ShopifyLocationManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyLocation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyLocationOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyLocationOptions>): Promise<GadgetRecord<SelectedShopifyLocationOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyLocation";
        modelApiIdentifier: "shopifyLocation";
        defaultSelection: typeof DefaultShopifyLocationSelection;
        selectionType: AvailableShopifyLocationSelection;
        optionsType: FindOneShopifyLocationOptions;
        schemaType: Query["shopifyLocation"];
    };
    /**
 * Finds one shopifyLocation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyLocationOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyLocationOptions>): Promise<GadgetRecord<SelectedShopifyLocationOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyLocation";
        modelApiIdentifier: "shopifyLocation";
        defaultSelection: typeof DefaultShopifyLocationSelection;
        selectionType: AvailableShopifyLocationSelection;
        optionsType: MaybeFindOneShopifyLocationOptions;
        schemaType: Query["shopifyLocation"];
    };
    /**
 * Finds many shopifyLocation. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyLocationsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyLocationsOptions>): Promise<GadgetRecordList<SelectedShopifyLocationOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyLocations";
        modelApiIdentifier: "shopifyLocation";
        defaultSelection: typeof DefaultShopifyLocationSelection;
        selectionType: AvailableShopifyLocationSelection;
        optionsType: FindManyShopifyLocationsOptions;
        schemaType: Query["shopifyLocation"];
    };
    /**
 * Finds the first matching shopifyLocation. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyLocationOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyLocationOptions>): Promise<GadgetRecord<SelectedShopifyLocationOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyLocations";
        modelApiIdentifier: "shopifyLocation";
        defaultSelection: typeof DefaultShopifyLocationSelection;
        selectionType: AvailableShopifyLocationSelection;
        optionsType: FindFirstShopifyLocationOptions;
        schemaType: Query["shopifyLocation"];
    };
    /**
 * Finds the first matching shopifyLocation. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyLocationOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyLocationOptions>): Promise<GadgetRecord<SelectedShopifyLocationOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyLocations";
        modelApiIdentifier: "shopifyLocation";
        defaultSelection: typeof DefaultShopifyLocationSelection;
        selectionType: AvailableShopifyLocationSelection;
        optionsType: MaybeFindFirstShopifyLocationOptions;
        schemaType: Query["shopifyLocation"];
    };
}
