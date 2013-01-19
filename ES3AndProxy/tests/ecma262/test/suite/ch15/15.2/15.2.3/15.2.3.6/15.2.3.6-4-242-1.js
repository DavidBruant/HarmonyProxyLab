var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([3]);
        Object.defineProperty(arrObj, '0', wrapTestObject({
            value: 1001,
            writable: false,
            enumerable: false
        }));
        return dataPropertyAttributesAreCorrect(arrObj, '0', 1001, false, false, true);
    });
runTestCase(testcase);