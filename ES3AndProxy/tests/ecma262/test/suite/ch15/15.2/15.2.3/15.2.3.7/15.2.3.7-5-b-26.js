var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var descObj = wrapTestObject(new RegExp());
        var accessed = false;
        descObj.enumerable = true;
        Object.defineProperties(obj, wrapTestObject({ prop: descObj }));
        for (var property in obj) {
            if (property === 'prop') {
                accessed = true;
            }
        }
        return accessed;
    });
runTestCase(testcase);