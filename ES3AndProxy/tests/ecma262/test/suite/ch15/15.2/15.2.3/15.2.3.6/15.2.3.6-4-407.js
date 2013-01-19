wrapTestObject(function testcase() {
    try {
        Object.defineProperty(Error.prototype, 'prop', wrapTestObject({
            value: 1001,
            writable: true,
            enumerable: true,
            configurable: true
        }));
        var errObj = wrapTestObject(new Error());
        return !errObj.hasOwnProperty('prop') && errObj.prop === 1001;
    } finally {
        delete Error.prototype.prop;
    }
});
runTestCase(testcase);