wrapTestObject(function testcase() {
    try {
        Object.defineProperty(fnGlobalObject(), 'prop', wrapTestObject({
            value: 11,
            writable: true,
            enumerable: true,
            configurable: true
        }));
        Object.defineProperties(fnGlobalObject(), wrapTestObject({ prop: wrapTestObject({ value: 12 }) }));
        return dataPropertyAttributesAreCorrect(fnGlobalObject(), 'prop', 12, true, true, true);
    } finally {
        delete fnGlobalObject().prop;
    }
});
runTestCase(testcase);