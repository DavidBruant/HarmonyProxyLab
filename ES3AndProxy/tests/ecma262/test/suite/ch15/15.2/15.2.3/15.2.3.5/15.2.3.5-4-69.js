wrapTestObject(function testcase() {
    var accessed = false;
    var argObj = wrapTestObject(function () {
            return arguments;
        })();
    argObj.enumerable = true;
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: argObj }));
    for (var property in newObj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);