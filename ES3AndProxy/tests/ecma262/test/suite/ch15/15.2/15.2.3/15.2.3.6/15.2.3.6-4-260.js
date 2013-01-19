var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([undefined]);
        Object.defineProperty(arrObj, '0', wrapTestObject({ value: 100 }));
        return dataPropertyAttributesAreCorrect(arrObj, '0', 100, true, true, true);
    });
runTestCase(testcase);