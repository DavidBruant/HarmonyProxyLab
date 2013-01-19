wrapTestObject(function testcase() {
    var errObj = wrapTestObject(new Error('error'));
    errObj.get = wrapTestObject(function () {
        return 'VerifyErrorObject';
    });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: errObj }));
    return newObj.prop === 'VerifyErrorObject';
});
runTestCase(testcase);