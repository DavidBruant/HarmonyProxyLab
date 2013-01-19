var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject([]);
        Object.defineProperty(obj, 'prop', wrapTestObject({
            value: 1001,
            writable: true,
            configurable: false
        }));
        Object.defineProperty(obj, 'prop', wrapTestObject({ value: 1002 }));
        return dataPropertyAttributesAreCorrect(obj, 'prop', 1002, true, false, false);
    });
runTestCase(testcase);