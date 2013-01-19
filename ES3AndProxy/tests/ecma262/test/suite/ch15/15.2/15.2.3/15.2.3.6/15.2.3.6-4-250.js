var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, '1', wrapTestObject({ value: false }));
        try {
            Object.defineProperty(arrObj, '1', wrapTestObject({ value: true }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '1', false, false, false, false);
        }
    });
runTestCase(testcase);