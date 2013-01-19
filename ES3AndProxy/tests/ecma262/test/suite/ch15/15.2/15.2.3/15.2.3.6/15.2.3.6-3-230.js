wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        fnGlobalObject().get = wrapTestObject(function () {
            return 'globalGetProperty';
        });
        Object.defineProperty(obj, 'property', fnGlobalObject());
        return obj.property === 'globalGetProperty';
    } finally {
        delete fnGlobalObject().get;
    }
});
runTestCase(testcase);