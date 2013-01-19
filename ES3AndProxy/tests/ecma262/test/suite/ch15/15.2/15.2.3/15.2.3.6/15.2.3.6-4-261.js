var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([100]);
        Object.defineProperty(arrObj, '0', wrapTestObject({ writable: false }));
        return dataPropertyAttributesAreCorrect(arrObj, '0', 100, false, true, true);
    });
runTestCase(testcase);