var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, '0', wrapTestObject({
            writable: true,
            enumerable: true,
            configurable: false
        }));
        return dataPropertyAttributesAreCorrect(arrObj, '0', undefined, true, true, false);
    });
runTestCase(testcase);