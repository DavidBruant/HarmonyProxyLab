var testcase = wrapTestObject(function testcase() {
        var accessed = false;
        var descObj = wrapTestObject({});
        Object.defineProperty(descObj, 'enumerable', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
        for (var property in newObj) {
            if (property === 'prop') {
                accessed = true;
            }
        }
        return !accessed;
    });
runTestCase(testcase);