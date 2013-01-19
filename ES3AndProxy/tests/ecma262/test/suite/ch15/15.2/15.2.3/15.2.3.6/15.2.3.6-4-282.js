var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, 'property', wrapTestObject({ writable: false }));
        try {
            Object.defineProperty(arrObj, 'property', wrapTestObject({ writable: true }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, 'property', undefined, false, false, false);
        }
    });
runTestCase(testcase);