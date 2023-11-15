import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, BlogPipeAds, BlogPipeAdsSort, BlogPipeAdsFilter, AvailableBlogPipeAdsSelection, CreateBlogPipeAdsInput, UpdateBlogPipeAdsInput } from "../types.js";
export declare const DefaultBlogPipeAdsSelection: {
    readonly __typename: true;
    readonly adName: true;
    readonly clicks: true;
    readonly createdAt: true;
    readonly endDate: true;
    readonly id: true;
    readonly impressions: true;
    readonly lastUpdate: true;
    readonly startDate: true;
    readonly status: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "blogPipeAds". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedBlogPipeAdsOrDefault<Options extends Selectable<AvailableBlogPipeAdsSelection>> = DeepFilterNever<Select<BlogPipeAds, DefaultSelection<AvailableBlogPipeAdsSelection, Options, typeof DefaultBlogPipeAdsSelection>>>;
/** Options that can be passed to the `BlogPipeAdsManager#findOne` method */
export interface FindOneBlogPipeAdsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeAdsSelection;
}
/** Options that can be passed to the `BlogPipeAdsManager#maybeFindOne` method */
export interface MaybeFindOneBlogPipeAdsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeAdsSelection;
}
/** Options that can be passed to the `BlogPipeAdsManager#findMany` method */
export interface FindManyBlogPipeAdssOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeAdsSelection;
    /** Return records sorted by these sorts */
    sort?: BlogPipeAdsSort | BlogPipeAdsSort[] | null;
    /** Only return records matching these filters. */
    filter?: BlogPipeAdsFilter | BlogPipeAdsFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `BlogPipeAdsManager#findFirst` method */
export interface FindFirstBlogPipeAdsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeAdsSelection;
    /** Return records sorted by these sorts */
    sort?: BlogPipeAdsSort | BlogPipeAdsSort[] | null;
    /** Only return records matching these filters. */
    filter?: BlogPipeAdsFilter | BlogPipeAdsFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `BlogPipeAdsManager#maybeFindFirst` method */
export interface MaybeFindFirstBlogPipeAdsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeAdsSelection;
    /** Return records sorted by these sorts */
    sort?: BlogPipeAdsSort | BlogPipeAdsSort[] | null;
    /** Only return records matching these filters. */
    filter?: BlogPipeAdsFilter | BlogPipeAdsFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateBlogPipeAdsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeAdsSelection;
}
export interface UpdateBlogPipeAdsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeAdsSelection;
}
export interface DeleteBlogPipeAdsOptions {
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateBlogPipeAdsVariables = {
    blogPipeAds?: CreateBlogPipeAdsInput;
};
/**
 * The inputs for executing create on blogPipeAds.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateBlogPipeAdsVariables = CreateBlogPipeAdsInput;
/**
 * The return value from executing create on blogPipeAds.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateBlogPipeAdsResult<Options extends CreateBlogPipeAdsOptions> = SelectedBlogPipeAdsOrDefault<Options> extends void ? void : GadgetRecord<SelectedBlogPipeAdsOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createBlogPipeAds<Options extends CreateBlogPipeAdsOptions>(variables: CreateBlogPipeAdsVariables, options?: LimitToKnownKeys<Options, CreateBlogPipeAdsOptions>): Promise<CreateBlogPipeAdsResult<Options>>;
declare function createBlogPipeAds<Options extends CreateBlogPipeAdsOptions>(variables: FullyQualifiedCreateBlogPipeAdsVariables, options?: LimitToKnownKeys<Options, CreateBlogPipeAdsOptions>): Promise<CreateBlogPipeAdsResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateBlogPipeAdsVariables = {
    blogPipeAds?: UpdateBlogPipeAdsInput;
};
/**
 * The inputs for executing update on blogPipeAds.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateBlogPipeAdsVariables = UpdateBlogPipeAdsInput;
/**
 * The return value from executing update on blogPipeAds.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateBlogPipeAdsResult<Options extends UpdateBlogPipeAdsOptions> = SelectedBlogPipeAdsOrDefault<Options> extends void ? void : GadgetRecord<SelectedBlogPipeAdsOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateBlogPipeAds<Options extends UpdateBlogPipeAdsOptions>(id: string, variables: UpdateBlogPipeAdsVariables, options?: LimitToKnownKeys<Options, UpdateBlogPipeAdsOptions>): Promise<UpdateBlogPipeAdsResult<Options>>;
declare function updateBlogPipeAds<Options extends UpdateBlogPipeAdsOptions>(id: string, variables: FullyQualifiedUpdateBlogPipeAdsVariables, options?: LimitToKnownKeys<Options, UpdateBlogPipeAdsOptions>): Promise<UpdateBlogPipeAdsResult<Options>>;
/**
 * The return value from executing delete on blogPipeAds.
 * "Is void because this action deletes the record"
 **/
export type DeleteBlogPipeAdsResult<Options extends DeleteBlogPipeAdsOptions> = void extends void ? void : GadgetRecord<SelectedBlogPipeAdsOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteBlogPipeAds<Options extends DeleteBlogPipeAdsOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteBlogPipeAdsOptions>): Promise<DeleteBlogPipeAdsResult<Options>>;
/** All the actions available at the collection level and record level for "blogPipeAds" */
export declare class BlogPipeAdsManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one blogPipeAds by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneBlogPipeAdsOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeAdsOptions>): Promise<GadgetRecord<SelectedBlogPipeAdsOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "blogPipeAds";
        modelApiIdentifier: "blogPipeAds";
        defaultSelection: typeof DefaultBlogPipeAdsSelection;
        selectionType: AvailableBlogPipeAdsSelection;
        optionsType: FindOneBlogPipeAdsOptions;
        schemaType: Query["blogPipeAds"];
    };
    /**
 * Finds one blogPipeAds by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneBlogPipeAdsOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneBlogPipeAdsOptions>): Promise<GadgetRecord<SelectedBlogPipeAdsOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "blogPipeAds";
        modelApiIdentifier: "blogPipeAds";
        defaultSelection: typeof DefaultBlogPipeAdsSelection;
        selectionType: AvailableBlogPipeAdsSelection;
        optionsType: MaybeFindOneBlogPipeAdsOptions;
        schemaType: Query["blogPipeAds"];
    };
    /**
 * Finds many blogPipeAds. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyBlogPipeAdssOptions>(options?: LimitToKnownKeys<Options, FindManyBlogPipeAdssOptions>): Promise<GadgetRecordList<SelectedBlogPipeAdsOrDefault<Options>>>;
        type: "findMany";
        operationName: "blogPipeAdss";
        modelApiIdentifier: "blogPipeAds";
        defaultSelection: typeof DefaultBlogPipeAdsSelection;
        selectionType: AvailableBlogPipeAdsSelection;
        optionsType: FindManyBlogPipeAdssOptions;
        schemaType: Query["blogPipeAds"];
    };
    /**
 * Finds the first matching blogPipeAds. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstBlogPipeAdsOptions>(options?: LimitToKnownKeys<Options, FindFirstBlogPipeAdsOptions>): Promise<GadgetRecord<SelectedBlogPipeAdsOrDefault<Options>>>;
        type: "findFirst";
        operationName: "blogPipeAdss";
        modelApiIdentifier: "blogPipeAds";
        defaultSelection: typeof DefaultBlogPipeAdsSelection;
        selectionType: AvailableBlogPipeAdsSelection;
        optionsType: FindFirstBlogPipeAdsOptions;
        schemaType: Query["blogPipeAds"];
    };
    /**
 * Finds the first matching blogPipeAds. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstBlogPipeAdsOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstBlogPipeAdsOptions>): Promise<GadgetRecord<SelectedBlogPipeAdsOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "blogPipeAdss";
        modelApiIdentifier: "blogPipeAds";
        defaultSelection: typeof DefaultBlogPipeAdsSelection;
        selectionType: AvailableBlogPipeAdsSelection;
        optionsType: MaybeFindFirstBlogPipeAdsOptions;
        schemaType: Query["blogPipeAds"];
    };
    /**
  * Finds one blogPipeAds by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneBlogPipeAdsOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeAdsOptions>): Promise<GadgetRecord<SelectedBlogPipeAdsOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "blogPipeAdss";
        modelApiIdentifier: "blogPipeAds";
        defaultSelection: typeof DefaultBlogPipeAdsSelection;
        selectionType: AvailableBlogPipeAdsSelection;
        optionsType: FindOneBlogPipeAdsOptions;
        schemaType: Query["blogPipeAds"];
    };
    create: typeof createBlogPipeAds & {
        type: "action";
        operationName: "createBlogPipeAds";
        namespace: null;
        modelApiIdentifier: "blogPipeAds";
        modelSelectionField: "blogPipeAds";
        isBulk: false;
        defaultSelection: typeof DefaultBlogPipeAdsSelection;
        selectionType: AvailableBlogPipeAdsSelection;
        optionsType: CreateBlogPipeAdsOptions;
        schemaType: Query["blogPipeAds"];
        variablesType: ((FullyQualifiedCreateBlogPipeAdsVariables | CreateBlogPipeAdsVariables)) | undefined;
        variables: {
            "blogPipeAds": {
                required: false;
                type: "CreateBlogPipeAdsInput";
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
* Executes the bulkCreate action with the given inputs.
*/
    bulkCreate: {
        <Options extends CreateBlogPipeAdsOptions>(inputs: (FullyQualifiedCreateBlogPipeAdsVariables | CreateBlogPipeAdsVariables)[], options?: LimitToKnownKeys<Options, CreateBlogPipeAdsOptions>): Promise<CreateBlogPipeAdsResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateBlogPipeAds";
        namespace: null;
        modelApiIdentifier: "blogPipeAds";
        modelSelectionField: "blogPipeAds";
        isBulk: true;
        defaultSelection: typeof DefaultBlogPipeAdsSelection;
        selectionType: AvailableBlogPipeAdsSelection;
        optionsType: CreateBlogPipeAdsOptions;
        schemaType: Query["blogPipeAds"];
        variablesType: (FullyQualifiedCreateBlogPipeAdsVariables | CreateBlogPipeAdsVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateBlogPipeAdsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateBlogPipeAds & {
        type: "action";
        operationName: "updateBlogPipeAds";
        namespace: null;
        modelApiIdentifier: "blogPipeAds";
        modelSelectionField: "blogPipeAds";
        isBulk: false;
        defaultSelection: typeof DefaultBlogPipeAdsSelection;
        selectionType: AvailableBlogPipeAdsSelection;
        optionsType: UpdateBlogPipeAdsOptions;
        schemaType: Query["blogPipeAds"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateBlogPipeAdsVariables | UpdateBlogPipeAdsVariables)) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "blogPipeAds": {
                required: false;
                type: "UpdateBlogPipeAdsInput";
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
* Executes the bulkUpdate action with the given inputs.
*/
    bulkUpdate: {
        <Options extends UpdateBlogPipeAdsOptions>(inputs: (FullyQualifiedUpdateBlogPipeAdsVariables | UpdateBlogPipeAdsVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateBlogPipeAdsOptions>): Promise<UpdateBlogPipeAdsResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateBlogPipeAds";
        namespace: null;
        modelApiIdentifier: "blogPipeAds";
        modelSelectionField: "blogPipeAds";
        isBulk: true;
        defaultSelection: typeof DefaultBlogPipeAdsSelection;
        selectionType: AvailableBlogPipeAdsSelection;
        optionsType: UpdateBlogPipeAdsOptions;
        schemaType: Query["blogPipeAds"];
        variablesType: (FullyQualifiedUpdateBlogPipeAdsVariables | UpdateBlogPipeAdsVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateBlogPipeAdsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteBlogPipeAds & {
        type: "action";
        operationName: "deleteBlogPipeAds";
        namespace: null;
        modelApiIdentifier: "blogPipeAds";
        modelSelectionField: "blogPipeAds";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteBlogPipeAdsOptions;
        schemaType: null;
        variablesType: ({
            id: string;
        } & {}) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: false;
    };
    /**
* Executes the bulkDelete action with the given inputs. Deletes the records on the server.
*/
    bulkDelete: {
        <Options extends DeleteBlogPipeAdsOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteBlogPipeAdsOptions>): Promise<DeleteBlogPipeAdsResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteBlogPipeAds";
        namespace: null;
        modelApiIdentifier: "blogPipeAds";
        modelSelectionField: "blogPipeAds";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteBlogPipeAdsOptions;
        schemaType: null;
        variablesType: IDsList | undefined;
        variables: {
            ids: {
                required: true;
                type: "[GadgetID!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
