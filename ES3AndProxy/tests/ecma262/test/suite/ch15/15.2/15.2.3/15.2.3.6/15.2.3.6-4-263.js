var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([100]);
        Object.defineProperty(arrObj, '0', wrapTestObject({ configurable: false }));
        return dataPropertyAttributesAreCorrect(arrObj, '0', 100, true, true, false);
    });
runTestCase(testcase);