var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([1]);
        Object.defineProperty(arrObj, '0', wrapTestObject({
            value: 1001,
            writable: false,
            enumerable: false,
            configurable: false
        }));
        return dataPropertyAttributesAreCorrect(arrObj, '0', 1001, false, false, false);
    });
runTestCase(testcase);