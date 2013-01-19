wrapTestObject(function testcase() {
    var obj = fnGlobalObject();
    try {
        Object.defineProperty(obj, '0', wrapTestObject({
            value: 1001,
            writable: false,
            configurable: true
        }));
        Object.defineProperty(obj, '0', wrapTestObject({ value: 1002 }));
        return dataPropertyAttributesAreCorrect(obj, '0', 1002, false, false, true);
    } finally {
        delete obj[0];
    }
});
runTestCase(testcase);