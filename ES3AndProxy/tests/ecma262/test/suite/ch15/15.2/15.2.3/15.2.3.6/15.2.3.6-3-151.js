wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        fnGlobalObject().value = 'global';
        Object.defineProperty(obj, 'property', fnGlobalObject());
        return obj.property === 'global';
    } finally {
        delete fnGlobalObject().value;
    }
});
runTestCase(testcase);