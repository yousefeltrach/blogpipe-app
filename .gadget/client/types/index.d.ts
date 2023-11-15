/**
* This is the Gadget API client library for:
*
*  __   __  ____  _                   _              ____                 _
*  \ \ / / | __ )| | ___   __ _ _ __ (_)_ __   ___  |  _ \  _____   _____| | ___  _ __
*   \ V /  |  _ \| |/ _ \ / _` | '_ \| | '_ \ / _ \ | | | |/ _ \ \ / / _ \ |/ _ \| '_ \
*    | |   | |_) | | (_) | (_| | |_) | | |_) |  __/ | |_| |  __/\ V /  __/ | (_) | |_) |
*    |_|   |____/|_|\___/ \__, | .__/|_| .__/ \___| |____/ \___| \_/ \___|_|\___/| .__/
*                         |___/|_|     |_|                                       |_|
*
* Built for environment "Development" at version 6314
* API docs: https://docs.gadget.dev/api/y-blogpipe-develop
* Edit this app here: https://y-blogpipe-develop.gadget.app/edit
*/
export { BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord, GadgetRecordList, GadgetValidationError, InvalidRecordError } from "@gadgetinc/api-client-core";
export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
            authentication?: {
                signInPath: string;
                redirectOnSuccessfulSignInPath: string;
            };
        };
    }
}
