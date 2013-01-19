wrapTestObject(function testcase() {
    var argObj = wrapTestObject(function () {
            return arguments;
        })();
    argObj.value = 'ArgValue';
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: argObj }));
    return newObj.prop === 'ArgValue';
});
runTestCase(testcase);