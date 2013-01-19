wrapTestObject(function testcase() {
    var funObj = wrapTestObject(function () {
        });
    funObj.get = wrapTestObject(function () {
        return 'VerifyFunctionObject';
    });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: funObj }));
    return newObj.prop === 'VerifyFunctionObject';
});
runTestCase(testcase);