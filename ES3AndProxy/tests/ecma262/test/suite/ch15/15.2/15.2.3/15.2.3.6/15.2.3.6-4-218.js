var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, '0', wrapTestObject({ value: -0 }));
        try {
            Object.defineProperty(arrObj, '0', wrapTestObject({ value: +0 }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '0', -0, false, false, false);
        }
    });
runTestCase(testcase);