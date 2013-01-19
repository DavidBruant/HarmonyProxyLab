wrapTestObject(function testcase() {
    var argObj = wrapTestObject(function () {
            return arguments;
        })();
    argObj.get = wrapTestObject(function () {
        return 'VerifyArgumentsObject';
    });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: argObj }));
    return newObj.prop === 'VerifyArgumentsObject';
});
runTestCase(testcase);