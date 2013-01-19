var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, '1', wrapTestObject({
            writable: false,
            configurable: false
        }));
        try {
            Object.defineProperty(arrObj, '1', wrapTestObject({ writable: true }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '1', undefined, false, false, false);
        }
    });
runTestCase(testcase);