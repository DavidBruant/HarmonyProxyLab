var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        var arg;
        wrapTestObject(function fun() {
            arg = arguments;
        })(1, 2, 3);
        Object.defineProperties(obj, wrapTestObject({ prop: wrapTestObject({ enumerable: arg }) }));
        for (var property in obj) {
            if (property === 'prop') {
                accessed = true;
            }
        }
        return accessed;
    });
runTestCase(testcase);