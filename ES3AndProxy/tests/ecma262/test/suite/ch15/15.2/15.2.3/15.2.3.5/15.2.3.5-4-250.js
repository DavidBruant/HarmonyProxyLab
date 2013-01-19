wrapTestObject(function testcase() {
    var regObj = wrapTestObject(new RegExp());
    regObj.get = wrapTestObject(function () {
        return 'VerifyRegExpObject';
    });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: regObj }));
    return newObj.prop === 'VerifyRegExpObject';
});
runTestCase(testcase);