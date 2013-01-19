var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, '1', wrapTestObject({ value: 'abc' }));
        try {
            Object.defineProperty(arrObj, '1', wrapTestObject({ value: 'fgh' }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '1', 'abc', false, false, false);
        }
    });
runTestCase(testcase);