import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyEvent, ShopifyEventSort, ShopifyEventFilter, AvailableShopifyEventSelection } from "../types.js";
export declare const DefaultShopifyEventSelection: {
    readonly __typename: true;
    readonly arguments: true;
    readonly author: true;
    readonly body: true;
    readonly createdAt: true;
    readonly description: true;
    readonly id: true;
    readonly message: true;
    readonly path: true;
    readonly shopifyCreatedAt: true;
    readonly subjectId: true;
    readonly subjectType: true;
    readonly updatedAt: true;
    readonly verb: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyEvent". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyEventOrDefault<Options extends Selectable<AvailableShopifyEventSelection>> = DeepFilterNever<Select<ShopifyEvent, DefaultSelection<AvailableShopifyEventSelection, Options, typeof DefaultShopifyEventSelection>>>;
/** Options that can be passed to the `ShopifyEventManager#findOne` method */
export interface FindOneShopifyEventOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyEventSelection;
}
/** Options that can be passed to the `ShopifyEventManager#maybeFindOne` method */
export interface MaybeFindOneShopifyEventOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyEventSelection;
}
/** Options that can be passed to the `ShopifyEventManager#findMany` method */
export interface FindManyShopifyEventsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyEventSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyEventSort | ShopifyEventSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyEventFilter | ShopifyEventFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyEventManager#findFirst` method */
export interface FindFirstShopifyEventOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyEventSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyEventSort | ShopifyEventSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyEventFilter | ShopifyEventFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyEventManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyEventOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyEventSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyEventSort | ShopifyEventSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyEventFilter | ShopifyEventFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyEvent" */
export declare class ShopifyEventManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyEvent by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyEventOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyEventOptions>): Promise<GadgetRecord<SelectedShopifyEventOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyEvent";
        modelApiIdentifier: "shopifyEvent";
        defaultSelection: typeof DefaultShopifyEventSelection;
        selectionType: AvailableShopifyEventSelection;
        optionsType: FindOneShopifyEventOptions;
        schemaType: Query["shopifyEvent"];
    };
    /**
 * Finds one shopifyEvent by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyEventOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyEventOptions>): Promise<GadgetRecord<SelectedShopifyEventOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyEvent";
        modelApiIdentifier: "shopifyEvent";
        defaultSelection: typeof DefaultShopifyEventSelection;
        selectionType: AvailableShopifyEventSelection;
        optionsType: MaybeFindOneShopifyEventOptions;
        schemaType: Query["shopifyEvent"];
    };
    /**
 * Finds many shopifyEvent. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyEventsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyEventsOptions>): Promise<GadgetRecordList<SelectedShopifyEventOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyEvents";
        modelApiIdentifier: "shopifyEvent";
        defaultSelection: typeof DefaultShopifyEventSelection;
        selectionType: AvailableShopifyEventSelection;
        optionsType: FindManyShopifyEventsOptions;
        schemaType: Query["shopifyEvent"];
    };
    /**
 * Finds the first matching shopifyEvent. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyEventOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyEventOptions>): Promise<GadgetRecord<SelectedShopifyEventOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyEvents";
        modelApiIdentifier: "shopifyEvent";
        defaultSelection: typeof DefaultShopifyEventSelection;
        selectionType: AvailableShopifyEventSelection;
        optionsType: FindFirstShopifyEventOptions;
        schemaType: Query["shopifyEvent"];
    };
    /**
 * Finds the first matching shopifyEvent. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyEventOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyEventOptions>): Promise<GadgetRecord<SelectedShopifyEventOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyEvents";
        modelApiIdentifier: "shopifyEvent";
        defaultSelection: typeof DefaultShopifyEventSelection;
        selectionType: AvailableShopifyEventSelection;
        optionsType: MaybeFindFirstShopifyEventOptions;
        schemaType: Query["shopifyEvent"];
    };
}
