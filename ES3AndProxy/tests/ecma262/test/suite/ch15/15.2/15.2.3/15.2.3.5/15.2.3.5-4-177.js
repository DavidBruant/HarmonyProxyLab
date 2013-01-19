wrapTestObject(function testcase() {
    try {
        fnGlobalObject().value = 'GlobalValue';
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: fnGlobalObject() }));
        return newObj.prop === 'GlobalValue';
    } finally {
        delete fnGlobalObject().value;
    }
});
runTestCase(testcase);