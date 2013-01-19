var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ prop: wrapTestObject({ value: 1001 }) }));
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (prop === 'prop') {
                    return false;
                }
            }
        }
        return true;
    });
runTestCase(testcase);