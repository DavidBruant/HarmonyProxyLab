var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, '0', wrapTestObject({ configurable: true }));
        Object.defineProperty(arrObj, '0', wrapTestObject({ configurable: false }));
        return dataPropertyAttributesAreCorrect(arrObj, '0', undefined, false, false, false);
    });
runTestCase(testcase);