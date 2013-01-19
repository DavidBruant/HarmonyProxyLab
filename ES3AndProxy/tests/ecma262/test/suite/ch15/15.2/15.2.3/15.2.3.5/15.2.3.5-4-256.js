wrapTestObject(function testcase() {
    fnGlobalObject().get = wrapTestObject(function () {
        return 'VerifyGlobalObject';
    });
    try {
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: fnGlobalObject() }));
        return newObj.prop === 'VerifyGlobalObject';
    } finally {
        delete fnGlobalObject().get;
    }
});
runTestCase(testcase);