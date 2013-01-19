wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    var argObj = wrapTestObject(function () {
            return arguments;
        })(0, 1, 2);
    Object.defineProperty(obj, 'property', wrapTestObject({ enumerable: argObj }));
    for (var prop in obj) {
        if (prop === 'property') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);