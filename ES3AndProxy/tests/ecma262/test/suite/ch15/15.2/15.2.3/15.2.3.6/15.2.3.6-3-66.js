var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        Object.defineProperty(obj, 'property', wrapTestObject({ enumerable: JSON }));
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return accessed;
    });
runTestCase(testcase);