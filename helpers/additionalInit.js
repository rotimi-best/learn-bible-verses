// Add special global keyword for some flexible debug
Object.defineProperty(global, '__stack', {
    get: function () {
        const orig = Error.prepareStackTrace;
        Error.prepareStackTrace = (_, stack) => stack;
        const err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        const stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty(global, '__line', {
    get: () => __stack[1].getLineNumber()
});

Object.defineProperty(global, '__function', {
    get: () => __stack[1].getFunctionName()
});
