import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, BlogPipeTopics, BlogPipeTopicsSort, BlogPipeTopicsFilter, AvailableBlogPipeTopicsSelection, CreateBlogPipeTopicsInput, UpdateBlogPipeTopicsInput, ActionABlogPipeTopicsInput } from "../types.js";
export declare const DefaultBlogPipeTopicsSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly keywords: true;
    readonly title: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "blogPipeTopics". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedBlogPipeTopicsOrDefault<Options extends Selectable<AvailableBlogPipeTopicsSelection>> = DeepFilterNever<Select<BlogPipeTopics, DefaultSelection<AvailableBlogPipeTopicsSelection, Options, typeof DefaultBlogPipeTopicsSelection>>>;
/** Options that can be passed to the `BlogPipeTopicsManager#findOne` method */
export interface FindOneBlogPipeTopicsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeTopicsSelection;
}
/** Options that can be passed to the `BlogPipeTopicsManager#maybeFindOne` method */
export interface MaybeFindOneBlogPipeTopicsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeTopicsSelection;
}
/** Options that can be passed to the `BlogPipeTopicsManager#findMany` method */
export interface FindManyBlogPipeTopicssOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeTopicsSelection;
    /** Return records sorted by these sorts */
    sort?: BlogPipeTopicsSort | BlogPipeTopicsSort[] | null;
    /** Only return records matching these filters. */
    filter?: BlogPipeTopicsFilter | BlogPipeTopicsFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `BlogPipeTopicsManager#findFirst` method */
export interface FindFirstBlogPipeTopicsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeTopicsSelection;
    /** Return records sorted by these sorts */
    sort?: BlogPipeTopicsSort | BlogPipeTopicsSort[] | null;
    /** Only return records matching these filters. */
    filter?: BlogPipeTopicsFilter | BlogPipeTopicsFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `BlogPipeTopicsManager#maybeFindFirst` method */
export interface MaybeFindFirstBlogPipeTopicsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeTopicsSelection;
    /** Return records sorted by these sorts */
    sort?: BlogPipeTopicsSort | BlogPipeTopicsSort[] | null;
    /** Only return records matching these filters. */
    filter?: BlogPipeTopicsFilter | BlogPipeTopicsFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateBlogPipeTopicsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeTopicsSelection;
}
export interface UpdateBlogPipeTopicsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeTopicsSelection;
}
export interface DeleteBlogPipeTopicsOptions {
}
export interface ActionABlogPipeTopicsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableBlogPipeTopicsSelection;
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateBlogPipeTopicsVariables = {
    blogPipeTopics?: CreateBlogPipeTopicsInput;
};
/**
 * The inputs for executing create on blogPipeTopics.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateBlogPipeTopicsVariables = CreateBlogPipeTopicsInput;
/**
 * The return value from executing create on blogPipeTopics.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateBlogPipeTopicsResult<Options extends CreateBlogPipeTopicsOptions> = SelectedBlogPipeTopicsOrDefault<Options> extends void ? void : GadgetRecord<SelectedBlogPipeTopicsOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createBlogPipeTopics<Options extends CreateBlogPipeTopicsOptions>(variables: CreateBlogPipeTopicsVariables, options?: LimitToKnownKeys<Options, CreateBlogPipeTopicsOptions>): Promise<CreateBlogPipeTopicsResult<Options>>;
declare function createBlogPipeTopics<Options extends CreateBlogPipeTopicsOptions>(variables: FullyQualifiedCreateBlogPipeTopicsVariables, options?: LimitToKnownKeys<Options, CreateBlogPipeTopicsOptions>): Promise<CreateBlogPipeTopicsResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateBlogPipeTopicsVariables = {
    blogPipeTopics?: UpdateBlogPipeTopicsInput;
};
/**
 * The inputs for executing update on blogPipeTopics.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateBlogPipeTopicsVariables = UpdateBlogPipeTopicsInput;
/**
 * The return value from executing update on blogPipeTopics.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateBlogPipeTopicsResult<Options extends UpdateBlogPipeTopicsOptions> = SelectedBlogPipeTopicsOrDefault<Options> extends void ? void : GadgetRecord<SelectedBlogPipeTopicsOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateBlogPipeTopics<Options extends UpdateBlogPipeTopicsOptions>(id: string, variables: UpdateBlogPipeTopicsVariables, options?: LimitToKnownKeys<Options, UpdateBlogPipeTopicsOptions>): Promise<UpdateBlogPipeTopicsResult<Options>>;
declare function updateBlogPipeTopics<Options extends UpdateBlogPipeTopicsOptions>(id: string, variables: FullyQualifiedUpdateBlogPipeTopicsVariables, options?: LimitToKnownKeys<Options, UpdateBlogPipeTopicsOptions>): Promise<UpdateBlogPipeTopicsResult<Options>>;
/**
 * The return value from executing delete on blogPipeTopics.
 * "Is void because this action deletes the record"
 **/
export type DeleteBlogPipeTopicsResult<Options extends DeleteBlogPipeTopicsOptions> = void extends void ? void : GadgetRecord<SelectedBlogPipeTopicsOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteBlogPipeTopics<Options extends DeleteBlogPipeTopicsOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteBlogPipeTopicsOptions>): Promise<DeleteBlogPipeTopicsResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedActionABlogPipeTopicsVariables = {
    blogPipeTopics?: ActionABlogPipeTopicsInput;
};
/**
 * The inputs for executing actionA on blogPipeTopics.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type ActionABlogPipeTopicsVariables = ActionABlogPipeTopicsInput;
/**
 * The return value from executing actionA on blogPipeTopics.
 * "Is a GadgetRecord of the model's type."
 **/
export type ActionABlogPipeTopicsResult<Options extends ActionABlogPipeTopicsOptions> = SelectedBlogPipeTopicsOrDefault<Options> extends void ? void : GadgetRecord<SelectedBlogPipeTopicsOrDefault<Options>>;
/**
  * Executes the actionA action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function actionABlogPipeTopics<Options extends ActionABlogPipeTopicsOptions>(id: string, variables: ActionABlogPipeTopicsVariables, options?: LimitToKnownKeys<Options, ActionABlogPipeTopicsOptions>): Promise<ActionABlogPipeTopicsResult<Options>>;
declare function actionABlogPipeTopics<Options extends ActionABlogPipeTopicsOptions>(id: string, variables: FullyQualifiedActionABlogPipeTopicsVariables, options?: LimitToKnownKeys<Options, ActionABlogPipeTopicsOptions>): Promise<ActionABlogPipeTopicsResult<Options>>;
/** All the actions available at the collection level and record level for "blogPipeTopics" */
export declare class BlogPipeTopicsManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one blogPipeTopics by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneBlogPipeTopicsOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeTopicsOptions>): Promise<GadgetRecord<SelectedBlogPipeTopicsOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "blogPipeTopics";
        modelApiIdentifier: "blogPipeTopics";
        defaultSelection: typeof DefaultBlogPipeTopicsSelection;
        selectionType: AvailableBlogPipeTopicsSelection;
        optionsType: FindOneBlogPipeTopicsOptions;
        schemaType: Query["blogPipeTopics"];
    };
    /**
 * Finds one blogPipeTopics by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneBlogPipeTopicsOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneBlogPipeTopicsOptions>): Promise<GadgetRecord<SelectedBlogPipeTopicsOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "blogPipeTopics";
        modelApiIdentifier: "blogPipeTopics";
        defaultSelection: typeof DefaultBlogPipeTopicsSelection;
        selectionType: AvailableBlogPipeTopicsSelection;
        optionsType: MaybeFindOneBlogPipeTopicsOptions;
        schemaType: Query["blogPipeTopics"];
    };
    /**
 * Finds many blogPipeTopics. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyBlogPipeTopicssOptions>(options?: LimitToKnownKeys<Options, FindManyBlogPipeTopicssOptions>): Promise<GadgetRecordList<SelectedBlogPipeTopicsOrDefault<Options>>>;
        type: "findMany";
        operationName: "blogPipeTopicss";
        modelApiIdentifier: "blogPipeTopics";
        defaultSelection: typeof DefaultBlogPipeTopicsSelection;
        selectionType: AvailableBlogPipeTopicsSelection;
        optionsType: FindManyBlogPipeTopicssOptions;
        schemaType: Query["blogPipeTopics"];
    };
    /**
 * Finds the first matching blogPipeTopics. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstBlogPipeTopicsOptions>(options?: LimitToKnownKeys<Options, FindFirstBlogPipeTopicsOptions>): Promise<GadgetRecord<SelectedBlogPipeTopicsOrDefault<Options>>>;
        type: "findFirst";
        operationName: "blogPipeTopicss";
        modelApiIdentifier: "blogPipeTopics";
        defaultSelection: typeof DefaultBlogPipeTopicsSelection;
        selectionType: AvailableBlogPipeTopicsSelection;
        optionsType: FindFirstBlogPipeTopicsOptions;
        schemaType: Query["blogPipeTopics"];
    };
    /**
 * Finds the first matching blogPipeTopics. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstBlogPipeTopicsOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstBlogPipeTopicsOptions>): Promise<GadgetRecord<SelectedBlogPipeTopicsOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "blogPipeTopicss";
        modelApiIdentifier: "blogPipeTopics";
        defaultSelection: typeof DefaultBlogPipeTopicsSelection;
        selectionType: AvailableBlogPipeTopicsSelection;
        optionsType: MaybeFindFirstBlogPipeTopicsOptions;
        schemaType: Query["blogPipeTopics"];
    };
    /**
  * Finds one blogPipeTopics by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneBlogPipeTopicsOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneBlogPipeTopicsOptions>): Promise<GadgetRecord<SelectedBlogPipeTopicsOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "blogPipeTopicss";
        modelApiIdentifier: "blogPipeTopics";
        defaultSelection: typeof DefaultBlogPipeTopicsSelection;
        selectionType: AvailableBlogPipeTopicsSelection;
        optionsType: FindOneBlogPipeTopicsOptions;
        schemaType: Query["blogPipeTopics"];
    };
    create: typeof createBlogPipeTopics & {
        type: "action";
        operationName: "createBlogPipeTopics";
        namespace: null;
        modelApiIdentifier: "blogPipeTopics";
        modelSelectionField: "blogPipeTopics";
        isBulk: false;
        defaultSelection: typeof DefaultBlogPipeTopicsSelection;
        selectionType: AvailableBlogPipeTopicsSelection;
        optionsType: CreateBlogPipeTopicsOptions;
        schemaType: Query["blogPipeTopics"];
        variablesType: ((FullyQualifiedCreateBlogPipeTopicsVariables | CreateBlogPipeTopicsVariables)) | undefined;
        variables: {
            "blogPipeTopics": {
                required: false;
                type: "CreateBlogPipeTopicsInput";
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
        <Options extends CreateBlogPipeTopicsOptions>(inputs: (FullyQualifiedCreateBlogPipeTopicsVariables | CreateBlogPipeTopicsVariables)[], options?: LimitToKnownKeys<Options, CreateBlogPipeTopicsOptions>): Promise<CreateBlogPipeTopicsResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateBlogPipeTopics";
        namespace: null;
        modelApiIdentifier: "blogPipeTopics";
        modelSelectionField: "blogPipeTopics";
        isBulk: true;
        defaultSelection: typeof DefaultBlogPipeTopicsSelection;
        selectionType: AvailableBlogPipeTopicsSelection;
        optionsType: CreateBlogPipeTopicsOptions;
        schemaType: Query["blogPipeTopics"];
        variablesType: (FullyQualifiedCreateBlogPipeTopicsVariables | CreateBlogPipeTopicsVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateBlogPipeTopicsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateBlogPipeTopics & {
        type: "action";
        operationName: "updateBlogPipeTopics";
        namespace: null;
        modelApiIdentifier: "blogPipeTopics";
        modelSelectionField: "blogPipeTopics";
        isBulk: false;
        defaultSelection: typeof DefaultBlogPipeTopicsSelection;
        selectionType: AvailableBlogPipeTopicsSelection;
        optionsType: UpdateBlogPipeTopicsOptions;
        schemaType: Query["blogPipeTopics"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateBlogPipeTopicsVariables | UpdateBlogPipeTopicsVariables)) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "blogPipeTopics": {
                required: false;
                type: "UpdateBlogPipeTopicsInput";
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
        <Options extends UpdateBlogPipeTopicsOptions>(inputs: (FullyQualifiedUpdateBlogPipeTopicsVariables | UpdateBlogPipeTopicsVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateBlogPipeTopicsOptions>): Promise<UpdateBlogPipeTopicsResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateBlogPipeTopics";
        namespace: null;
        modelApiIdentifier: "blogPipeTopics";
        modelSelectionField: "blogPipeTopics";
        isBulk: true;
        defaultSelection: typeof DefaultBlogPipeTopicsSelection;
        selectionType: AvailableBlogPipeTopicsSelection;
        optionsType: UpdateBlogPipeTopicsOptions;
        schemaType: Query["blogPipeTopics"];
        variablesType: (FullyQualifiedUpdateBlogPipeTopicsVariables | UpdateBlogPipeTopicsVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateBlogPipeTopicsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteBlogPipeTopics & {
        type: "action";
        operationName: "deleteBlogPipeTopics";
        namespace: null;
        modelApiIdentifier: "blogPipeTopics";
        modelSelectionField: "blogPipeTopics";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteBlogPipeTopicsOptions;
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
        <Options extends DeleteBlogPipeTopicsOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteBlogPipeTopicsOptions>): Promise<DeleteBlogPipeTopicsResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteBlogPipeTopics";
        namespace: null;
        modelApiIdentifier: "blogPipeTopics";
        modelSelectionField: "blogPipeTopics";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteBlogPipeTopicsOptions;
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
    actionA: typeof actionABlogPipeTopics & {
        type: "action";
        operationName: "actionABlogPipeTopics";
        namespace: null;
        modelApiIdentifier: "blogPipeTopics";
        modelSelectionField: "blogPipeTopics";
        isBulk: false;
        defaultSelection: typeof DefaultBlogPipeTopicsSelection;
        selectionType: AvailableBlogPipeTopicsSelection;
        optionsType: ActionABlogPipeTopicsOptions;
        schemaType: Query["blogPipeTopics"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedActionABlogPipeTopicsVariables | ActionABlogPipeTopicsVariables)) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "blogPipeTopics": {
                required: false;
                type: "ActionABlogPipeTopicsInput";
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
        <Options extends ActionABlogPipeTopicsOptions>(inputs: (FullyQualifiedActionABlogPipeTopicsVariables | ActionABlogPipeTopicsVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, ActionABlogPipeTopicsOptions>): Promise<ActionABlogPipeTopicsResult<Options>[]>;
        type: "action";
        operationName: "bulkActionABlogPipeTopics";
        namespace: null;
        modelApiIdentifier: "blogPipeTopics";
        modelSelectionField: "blogPipeTopics";
        isBulk: true;
        defaultSelection: typeof DefaultBlogPipeTopicsSelection;
        selectionType: AvailableBlogPipeTopicsSelection;
        optionsType: ActionABlogPipeTopicsOptions;
        schemaType: Query["blogPipeTopics"];
        variablesType: (FullyQualifiedActionABlogPipeTopicsVariables | ActionABlogPipeTopicsVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkActionABlogPipeTopicsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
