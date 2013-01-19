var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject(function () {
                return arguments;
            })();
        Object.defineProperty(obj, '0', wrapTestObject({
            value: 1001,
            writable: true,
            configurable: false
        }));
        Object.defineProperty(obj, '0', wrapTestObject({ value: 1002 }));
        return dataPropertyAttributesAreCorrect(obj, '0', 1002, true, false, false);
    });
runTestCase(testcase);