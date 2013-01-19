var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, '0', wrapTestObject({ writable: false }));
        Object.defineProperty(arrObj, '0', wrapTestObject({ writable: false }));
        return dataPropertyAttributesAreCorrect(arrObj, '0', undefined, false, false, false);
    });
runTestCase(testcase);