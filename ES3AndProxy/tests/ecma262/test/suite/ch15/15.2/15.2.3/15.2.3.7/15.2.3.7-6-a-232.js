var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperty(arr, '1', wrapTestObject({
            get: wrapTestObject(function () {
                return 3;
            }),
            configurable: true
        }));
        Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ value: 12 }) }));
        return dataPropertyAttributesAreCorrect(arr, '1', 12, false, false, true);
    });
runTestCase(testcase);