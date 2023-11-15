import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyShop, ShopifyShopSort, ShopifyShopFilter, AvailableShopifyShopSelection, ActionAShopifyShopInput } from "../types.js";
export declare const DefaultShopifyShopSelection: {
    readonly __typename: true;
    readonly address1: true;
    readonly address2: true;
    readonly checkoutApiSupported: true;
    readonly city: true;
    readonly cookieConsentLevel: true;
    readonly country: true;
    readonly countryCode: true;
    readonly countryName: true;
    readonly countyTaxes: true;
    readonly createdAt: true;
    readonly currency: true;
    readonly customerEmail: true;
    readonly domain: true;
    readonly eligibleForCardReaderGiveaway: true;
    readonly eligibleForPayments: true;
    readonly email: true;
    readonly enabledPresentmentCurrencies: true;
    readonly finances: true;
    readonly forceSsl: true;
    readonly googleAppsDomain: true;
    readonly googleAppsLoginEnabled: true;
    readonly grantedScopes: true;
    readonly hasDiscounts: true;
    readonly hasGiftCards: true;
    readonly hasStorefront: true;
    readonly ianaTimezone: true;
    readonly id: true;
    readonly installedViaApiKey: true;
    readonly latitude: true;
    readonly longitude: true;
    readonly marketingSmsContentEnabledAtCheckout: true;
    readonly moneyFormat: true;
    readonly moneyInEmailsFormat: true;
    readonly moneyWithCurrencyFormat: true;
    readonly moneyWithCurrencyInEmailsFormat: true;
    readonly multiLocationEnabled: true;
    readonly myshopifyDomain: true;
    readonly name: true;
    readonly passwordEnabled: true;
    readonly phone: true;
    readonly planDisplayName: true;
    readonly planName: true;
    readonly preLaunchEnabled: true;
    readonly primaryLocale: true;
    readonly province: true;
    readonly provinceCode: true;
    readonly registeredWebhooks: true;
    readonly requiresExtraPaymentsAgreement: true;
    readonly setupRequired: true;
    readonly shopOwner: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly source: true;
    readonly state: true;
    readonly taxShipping: true;
    readonly taxesIncluded: true;
    readonly timezone: true;
    readonly transactionalSmsDisabled: true;
    readonly updatedAt: true;
    readonly weightUnit: true;
    readonly zipCode: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyShop". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyShopOrDefault<Options extends Selectable<AvailableShopifyShopSelection>> = DeepFilterNever<Select<ShopifyShop, DefaultSelection<AvailableShopifyShopSelection, Options, typeof DefaultShopifyShopSelection>>>;
/** Options that can be passed to the `ShopifyShopManager#findOne` method */
export interface FindOneShopifyShopOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyShopSelection;
}
/** Options that can be passed to the `ShopifyShopManager#maybeFindOne` method */
export interface MaybeFindOneShopifyShopOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyShopSelection;
}
/** Options that can be passed to the `ShopifyShopManager#findMany` method */
export interface FindManyShopifyShopsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyShopSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyShopSort | ShopifyShopSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyShopFilter | ShopifyShopFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyShopManager#findFirst` method */
export interface FindFirstShopifyShopOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyShopSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyShopSort | ShopifyShopSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyShopFilter | ShopifyShopFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyShopManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyShopOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyShopSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyShopSort | ShopifyShopSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyShopFilter | ShopifyShopFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface ActionAShopifyShopOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyShopSelection;
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedActionAShopifyShopVariables = {
    shopifyShop?: ActionAShopifyShopInput;
};
/**
 * The inputs for executing actionA on shopifyShop.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type ActionAShopifyShopVariables = ActionAShopifyShopInput;
/**
 * The return value from executing actionA on shopifyShop.
 * "Is a GadgetRecord of the model's type."
 **/
export type ActionAShopifyShopResult<Options extends ActionAShopifyShopOptions> = SelectedShopifyShopOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyShopOrDefault<Options>>;
/**
  * Executes the actionA action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function actionAShopifyShop<Options extends ActionAShopifyShopOptions>(id: string, variables: ActionAShopifyShopVariables, options?: LimitToKnownKeys<Options, ActionAShopifyShopOptions>): Promise<ActionAShopifyShopResult<Options>>;
declare function actionAShopifyShop<Options extends ActionAShopifyShopOptions>(id: string, variables: FullyQualifiedActionAShopifyShopVariables, options?: LimitToKnownKeys<Options, ActionAShopifyShopOptions>): Promise<ActionAShopifyShopResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyShop" */
export declare class ShopifyShopManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyShop by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyShopOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyShopOptions>): Promise<GadgetRecord<SelectedShopifyShopOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyShop";
        modelApiIdentifier: "shopifyShop";
        defaultSelection: typeof DefaultShopifyShopSelection;
        selectionType: AvailableShopifyShopSelection;
        optionsType: FindOneShopifyShopOptions;
        schemaType: Query["shopifyShop"];
    };
    /**
 * Finds one shopifyShop by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyShopOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyShopOptions>): Promise<GadgetRecord<SelectedShopifyShopOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyShop";
        modelApiIdentifier: "shopifyShop";
        defaultSelection: typeof DefaultShopifyShopSelection;
        selectionType: AvailableShopifyShopSelection;
        optionsType: MaybeFindOneShopifyShopOptions;
        schemaType: Query["shopifyShop"];
    };
    /**
 * Finds many shopifyShop. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyShopsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyShopsOptions>): Promise<GadgetRecordList<SelectedShopifyShopOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyShops";
        modelApiIdentifier: "shopifyShop";
        defaultSelection: typeof DefaultShopifyShopSelection;
        selectionType: AvailableShopifyShopSelection;
        optionsType: FindManyShopifyShopsOptions;
        schemaType: Query["shopifyShop"];
    };
    /**
 * Finds the first matching shopifyShop. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyShopOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyShopOptions>): Promise<GadgetRecord<SelectedShopifyShopOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyShops";
        modelApiIdentifier: "shopifyShop";
        defaultSelection: typeof DefaultShopifyShopSelection;
        selectionType: AvailableShopifyShopSelection;
        optionsType: FindFirstShopifyShopOptions;
        schemaType: Query["shopifyShop"];
    };
    /**
 * Finds the first matching shopifyShop. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyShopOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyShopOptions>): Promise<GadgetRecord<SelectedShopifyShopOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyShops";
        modelApiIdentifier: "shopifyShop";
        defaultSelection: typeof DefaultShopifyShopSelection;
        selectionType: AvailableShopifyShopSelection;
        optionsType: MaybeFindFirstShopifyShopOptions;
        schemaType: Query["shopifyShop"];
    };
    actionA: typeof actionAShopifyShop & {
        type: "action";
        operationName: "actionAShopifyShop";
        namespace: null;
        modelApiIdentifier: "shopifyShop";
        modelSelectionField: "shopifyShop";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyShopSelection;
        selectionType: AvailableShopifyShopSelection;
        optionsType: ActionAShopifyShopOptions;
        schemaType: Query["shopifyShop"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedActionAShopifyShopVariables | ActionAShopifyShopVariables)) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyShop": {
                required: false;
                type: "ActionAShopifyShopInput";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
    };
    /**
* Executes the bulkActionA action with the given inputs.
*/
    bulkActionA: {
        <Options extends ActionAShopifyShopOptions>(inputs: (FullyQualifiedActionAShopifyShopVariables | ActionAShopifyShopVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, ActionAShopifyShopOptions>): Promise<ActionAShopifyShopResult<Options>[]>;
        type: "action";
        operationName: "bulkActionAShopifyShops";
        namespace: null;
        modelApiIdentifier: "shopifyShop";
        modelSelectionField: "shopifyShops";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyShopSelection;
        selectionType: AvailableShopifyShopSelection;
        optionsType: ActionAShopifyShopOptions;
        schemaType: Query["shopifyShop"];
        variablesType: (FullyQualifiedActionAShopifyShopVariables | ActionAShopifyShopVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkActionAShopifyShopsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
