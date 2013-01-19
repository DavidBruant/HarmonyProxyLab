var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: undefined,
            set: undefined,
            enumerable: false,
            configurable: true
        }));
        var result1 = false;
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        for (var p1 in obj) {
            if (p1 === 'prop') {
                result1 = true;
            }
        }
        Object.defineProperty(obj, 'prop', wrapTestObject({ enumerable: true }));
        var result2 = false;
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        for (var p2 in obj) {
            if (p2 === 'prop') {
                result2 = true;
            }
        }
        return !result1 && result2 && desc1.enumerable === false && desc2.enumerable === true;
    });
runTestCase(testcase);