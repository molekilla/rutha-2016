// Type definitions for redux-promise
// Project: https://github.com/acdlite/redux-promise
// Definitions by: molekilla <https://github.com/molekilla>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare namespace ReduxPromise {
    export interface Promise extends Redux.Middleware {}
    export interface PromiseInterface {
      <T>(dispatch: Redux.Dispatch, getState?: () => T): any;
    }
}

declare module "redux-promise" {
    var promise: ReduxPromise.Promise;
    export default promise;
}