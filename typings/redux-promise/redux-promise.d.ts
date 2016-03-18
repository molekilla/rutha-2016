declare namespace ReduxPromise {
        interface MiddlewareArg {
        dispatch: any;
        getState: Function;
    }

    interface Middleware extends Function {
        (obj: MiddlewareArg): Function;
    }
    export function promiseMiddleware(_ref): Middleware;
}

declare module 'redux-promise' {
    export = ReduxPromise;
}