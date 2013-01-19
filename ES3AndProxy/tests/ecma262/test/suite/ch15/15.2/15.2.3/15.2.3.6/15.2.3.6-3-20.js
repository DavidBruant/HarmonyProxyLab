var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        Object.defineProperty(obj, 'property', wrapTestObject({ enumerable: false }));
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return !accessed && obj.hasOwnProperty('property');
    });
runTestCase(testcase);