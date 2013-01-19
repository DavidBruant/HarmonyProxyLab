var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'property', wrapTestObject({ enumerable: true }));
        var isEnumerable = false;
        for (var item in obj) {
            if (obj.hasOwnProperty(item) && item === 'property') {
                isEnumerable = true;
            }
        }
        return obj.hasOwnProperty('property') && isEnumerable;
    });
runTestCase(testcase);