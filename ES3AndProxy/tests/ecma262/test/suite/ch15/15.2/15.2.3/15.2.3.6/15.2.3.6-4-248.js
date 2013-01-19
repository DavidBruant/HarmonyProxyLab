var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, '1', wrapTestObject({ value: 12 }));
        try {
            Object.defineProperty(arrObj, '1', wrapTestObject({ value: 15 }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '1', 12, false, false, false);
        }
    });
runTestCase(testcase);