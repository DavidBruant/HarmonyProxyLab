wrapTestObject(function testcase() {
    var boolObj = wrapTestObject(new Boolean(true));
    boolObj.get = wrapTestObject(function () {
        return 'VerifyBooleanObject';
    });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: boolObj }));
    return newObj.prop === 'VerifyBooleanObject';
});
runTestCase(testcase);