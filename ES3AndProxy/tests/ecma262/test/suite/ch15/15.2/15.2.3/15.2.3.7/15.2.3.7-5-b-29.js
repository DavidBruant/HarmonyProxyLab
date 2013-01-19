wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var arg;
    var accessed = false;
    wrapTestObject(function fun() {
        arg = arguments;
    })();
    arg.enumerable = true;
    Object.defineProperties(obj, wrapTestObject({ prop: arg }));
    for (var property in obj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);