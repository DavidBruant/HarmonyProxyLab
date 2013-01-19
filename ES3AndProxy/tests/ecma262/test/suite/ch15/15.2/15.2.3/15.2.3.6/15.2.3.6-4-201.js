var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, '0', wrapTestObject({
            value: 1001,
            enumerable: true,
            configurable: false
        }));
        return dataPropertyAttributesAreCorrect(arrObj, '0', 1001, false, true, false);
    });
runTestCase(testcase);