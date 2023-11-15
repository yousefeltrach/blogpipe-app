import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, BlogPipeArticle, BlogPipeArticleSort, BlogPipeArticleFilter, AvailableBlogPipeArticleSelection, CreateBlogPipeArticleInput, UpdateBlogPipeArticleInput } from "../types.js";
export declare const DefaultBlogPipeArticleSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly status: true;
    readonly title: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "blogPipeArticle". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedBlogPipeArticleOrDefault<Options extends Selectable<AvailableBlogPipeArticleSelection>> = DeepFilterNever<Select<BlogPipeArticle, DefaultSelection<AvailableBlogPipeArticleSelection, Options, typeof DefaultBlogPipeArticleSelection>>>;
/** Options that can be passed to the `BlogPipeArticleManager#findOne` method */
export interface FindOneBlogPipeArticleOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeArticleSelection;
}
/** Options that can be passed to the `BlogPipeArticleManager#maybeFindOne` method */
export interface MaybeFindOneBlogPipeArticleOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeArticleSelection;
}
/** Options that can be passed to the `BlogPipeArticleManager#findMany` method */
export interface FindManyBlogPipeArticlesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeArticleSelection;
    /** Return records sorted by these sorts */
    sort?: BlogPipeArticleSort | BlogPipeArticleSort[] | null;
    /** Only return records matching these filters. */
    filter?: BlogPipeArticleFilter | BlogPipeArticleFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `BlogPipeArticleManager#findFirst` method */
export interface FindFirstBlogPipeArticleOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeArticleSelection;
    /** Return records sorted by these sorts */
    sort?: BlogPipeArticleSort | BlogPipeArticleSort[] | null;
    /** Only return records matching these filters. */
    filter?: BlogPipeArticleFilter | BlogPipeArticleFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `BlogPipeArticleManager#maybeFindFirst` method */
export interface MaybeFindFirstBlogPipeArticleOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeArticleSelection;
    /** Return records sorted by these sorts */
    sort?: BlogPipeArticleSort | BlogPipeArticleSort[] | null;
    /** Only return records matching these filters. */
    filter?: BlogPipeArticleFilter | BlogPipeArticleFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateBlogPipeArticleOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeArticleSelection;
}
export interface UpdateBlogPipeArticleOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeArticleSelection;
}
export interface DeleteBlogPipeArticleOptions {
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateBlogPipeArticleVariables = {
    blogPipeArticle?: CreateBlogPipeArticleInput;
};
/**
 * The inputs for executing create on blogPipeArticle.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateBlogPipeArticleVariables = CreateBlogPipeArticleInput;
/**
 * The return value from executing create on blogPipeArticle.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateBlogPipeArticleResult<Options extends CreateBlogPipeArticleOptions> = SelectedBlogPipeArticleOrDefault<Options> extends void ? void : GadgetRecord<SelectedBlogPipeArticleOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createBlogPipeArticle<Options extends CreateBlogPipeArticleOptions>(variables: CreateBlogPipeArticleVariables, options?: LimitToKnownKeys<Options, CreateBlogPipeArticleOptions>): Promise<CreateBlogPipeArticleResult<Options>>;
declare function createBlogPipeArticle<Options extends CreateBlogPipeArticleOptions>(variables: FullyQualifiedCreateBlogPipeArticleVariables, options?: LimitToKnownKeys<Options, CreateBlogPipeArticleOptions>): Promise<CreateBlogPipeArticleResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateBlogPipeArticleVariables = {
    blogPipeArticle?: UpdateBlogPipeArticleInput;
};
/**
 * The inputs for executing update on blogPipeArticle.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateBlogPipeArticleVariables = UpdateBlogPipeArticleInput;
/**
 * The return value from executing update on blogPipeArticle.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateBlogPipeArticleResult<Options extends UpdateBlogPipeArticleOptions> = SelectedBlogPipeArticleOrDefault<Options> extends void ? void : GadgetRecord<SelectedBlogPipeArticleOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateBlogPipeArticle<Options extends UpdateBlogPipeArticleOptions>(id: string, variables: UpdateBlogPipeArticleVariables, options?: LimitToKnownKeys<Options, UpdateBlogPipeArticleOptions>): Promise<UpdateBlogPipeArticleResult<Options>>;
declare function updateBlogPipeArticle<Options extends UpdateBlogPipeArticleOptions>(id: string, variables: FullyQualifiedUpdateBlogPipeArticleVariables, options?: LimitToKnownKeys<Options, UpdateBlogPipeArticleOptions>): Promise<UpdateBlogPipeArticleResult<Options>>;
/**
 * The return value from executing delete on blogPipeArticle.
 * "Is void because this action deletes the record"
 **/
export type DeleteBlogPipeArticleResult<Options extends DeleteBlogPipeArticleOptions> = void extends void ? void : GadgetRecord<SelectedBlogPipeArticleOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteBlogPipeArticle<Options extends DeleteBlogPipeArticleOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteBlogPipeArticleOptions>): Promise<DeleteBlogPipeArticleResult<Options>>;
/** All the actions available at the collection level and record level for "blogPipeArticle" */
export declare class BlogPipeArticleManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one blogPipeArticle by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneBlogPipeArticleOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeArticleOptions>): Promise<GadgetRecord<SelectedBlogPipeArticleOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "blogPipeArticle";
        modelApiIdentifier: "blogPipeArticle";
        defaultSelection: typeof DefaultBlogPipeArticleSelection;
        selectionType: AvailableBlogPipeArticleSelection;
        optionsType: FindOneBlogPipeArticleOptions;
        schemaType: Query["blogPipeArticle"];
    };
    /**
 * Finds one blogPipeArticle by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneBlogPipeArticleOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneBlogPipeArticleOptions>): Promise<GadgetRecord<SelectedBlogPipeArticleOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "blogPipeArticle";
        modelApiIdentifier: "blogPipeArticle";
        defaultSelection: typeof DefaultBlogPipeArticleSelection;
        selectionType: AvailableBlogPipeArticleSelection;
        optionsType: MaybeFindOneBlogPipeArticleOptions;
        schemaType: Query["blogPipeArticle"];
    };
    /**
 * Finds many blogPipeArticle. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyBlogPipeArticlesOptions>(options?: LimitToKnownKeys<Options, FindManyBlogPipeArticlesOptions>): Promise<GadgetRecordList<SelectedBlogPipeArticleOrDefault<Options>>>;
        type: "findMany";
        operationName: "blogPipeArticles";
        modelApiIdentifier: "blogPipeArticle";
        defaultSelection: typeof DefaultBlogPipeArticleSelection;
        selectionType: AvailableBlogPipeArticleSelection;
        optionsType: FindManyBlogPipeArticlesOptions;
        schemaType: Query["blogPipeArticle"];
    };
    /**
 * Finds the first matching blogPipeArticle. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstBlogPipeArticleOptions>(options?: LimitToKnownKeys<Options, FindFirstBlogPipeArticleOptions>): Promise<GadgetRecord<SelectedBlogPipeArticleOrDefault<Options>>>;
        type: "findFirst";
        operationName: "blogPipeArticles";
        modelApiIdentifier: "blogPipeArticle";
        defaultSelection: typeof DefaultBlogPipeArticleSelection;
        selectionType: AvailableBlogPipeArticleSelection;
        optionsType: FindFirstBlogPipeArticleOptions;
        schemaType: Query["blogPipeArticle"];
    };
    /**
 * Finds the first matching blogPipeArticle. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstBlogPipeArticleOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstBlogPipeArticleOptions>): Promise<GadgetRecord<SelectedBlogPipeArticleOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "blogPipeArticles";
        modelApiIdentifier: "blogPipeArticle";
        defaultSelection: typeof DefaultBlogPipeArticleSelection;
        selectionType: AvailableBlogPipeArticleSelection;
        optionsType: MaybeFindFirstBlogPipeArticleOptions;
        schemaType: Query["blogPipeArticle"];
    };
    /**
  * Finds one blogPipeArticle by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneBlogPipeArticleOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeArticleOptions>): Promise<GadgetRecord<SelectedBlogPipeArticleOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "blogPipeArticles";
        modelApiIdentifier: "blogPipeArticle";
        defaultSelection: typeof DefaultBlogPipeArticleSelection;
        selectionType: AvailableBlogPipeArticleSelection;
        optionsType: FindOneBlogPipeArticleOptions;
        schemaType: Query["blogPipeArticle"];
    };
    create: typeof createBlogPipeArticle & {
        type: "action";
        operationName: "createBlogPipeArticle";
        namespace: null;
        modelApiIdentifier: "blogPipeArticle";
        modelSelectionField: "blogPipeArticle";
        isBulk: false;
        defaultSelection: typeof DefaultBlogPipeArticleSelection;
        selectionType: AvailableBlogPipeArticleSelection;
        optionsType: CreateBlogPipeArticleOptions;
        schemaType: Query["blogPipeArticle"];
        variablesType: ((FullyQualifiedCreateBlogPipeArticleVariables | CreateBlogPipeArticleVariables)) | undefined;
        variables: {
            "blogPipeArticle": {
                required: false;
                type: "CreateBlogPipeArticleInput";
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
        <Options extends CreateBlogPipeArticleOptions>(inputs: (FullyQualifiedCreateBlogPipeArticleVariables | CreateBlogPipeArticleVariables)[], options?: LimitToKnownKeys<Options, CreateBlogPipeArticleOptions>): Promise<CreateBlogPipeArticleResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateBlogPipeArticles";
        namespace: null;
        modelApiIdentifier: "blogPipeArticle";
        modelSelectionField: "blogPipeArticles";
        isBulk: true;
        defaultSelection: typeof DefaultBlogPipeArticleSelection;
        selectionType: AvailableBlogPipeArticleSelection;
        optionsType: CreateBlogPipeArticleOptions;
        schemaType: Query["blogPipeArticle"];
        variablesType: (FullyQualifiedCreateBlogPipeArticleVariables | CreateBlogPipeArticleVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateBlogPipeArticlesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateBlogPipeArticle & {
        type: "action";
        operationName: "updateBlogPipeArticle";
        namespace: null;
        modelApiIdentifier: "blogPipeArticle";
        modelSelectionField: "blogPipeArticle";
        isBulk: false;
        defaultSelection: typeof DefaultBlogPipeArticleSelection;
        selectionType: AvailableBlogPipeArticleSelection;
        optionsType: UpdateBlogPipeArticleOptions;
        schemaType: Query["blogPipeArticle"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateBlogPipeArticleVariables | UpdateBlogPipeArticleVariables)) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "blogPipeArticle": {
                required: false;
                type: "UpdateBlogPipeArticleInput";
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
        <Options extends UpdateBlogPipeArticleOptions>(inputs: (FullyQualifiedUpdateBlogPipeArticleVariables | UpdateBlogPipeArticleVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateBlogPipeArticleOptions>): Promise<UpdateBlogPipeArticleResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateBlogPipeArticles";
        namespace: null;
        modelApiIdentifier: "blogPipeArticle";
        modelSelectionField: "blogPipeArticles";
        isBulk: true;
        defaultSelection: typeof DefaultBlogPipeArticleSelection;
        selectionType: AvailableBlogPipeArticleSelection;
        optionsType: UpdateBlogPipeArticleOptions;
        schemaType: Query["blogPipeArticle"];
        variablesType: (FullyQualifiedUpdateBlogPipeArticleVariables | UpdateBlogPipeArticleVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateBlogPipeArticlesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteBlogPipeArticle & {
        type: "action";
        operationName: "deleteBlogPipeArticle";
        namespace: null;
        modelApiIdentifier: "blogPipeArticle";
        modelSelectionField: "blogPipeArticle";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteBlogPipeArticleOptions;
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
        <Options extends DeleteBlogPipeArticleOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteBlogPipeArticleOptions>): Promise<DeleteBlogPipeArticleResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteBlogPipeArticles";
        namespace: null;
        modelApiIdentifier: "blogPipeArticle";
        modelSelectionField: "blogPipeArticles";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteBlogPipeArticleOptions;
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
