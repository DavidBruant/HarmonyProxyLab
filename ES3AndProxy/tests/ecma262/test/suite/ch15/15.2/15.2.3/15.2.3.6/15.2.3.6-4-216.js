var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, '0', wrapTestObject({ value: null }));
        Object.defineProperty(arrObj, '0', wrapTestObject({ value: null }));
        return dataPropertyAttributesAreCorrect(arrObj, '0', null, false, false, false);
    });
runTestCase(testcase);