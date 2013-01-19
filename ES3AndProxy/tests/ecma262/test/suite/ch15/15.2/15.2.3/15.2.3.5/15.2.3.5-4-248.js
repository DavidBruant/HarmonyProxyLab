wrapTestObject(function testcase() {
    var numObj = wrapTestObject(new Number(5));
    numObj.get = wrapTestObject(function () {
        return 'VerifyNumberObject';
    });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: numObj }));
    return newObj.prop === 'VerifyNumberObject';
});
runTestCase(testcase);