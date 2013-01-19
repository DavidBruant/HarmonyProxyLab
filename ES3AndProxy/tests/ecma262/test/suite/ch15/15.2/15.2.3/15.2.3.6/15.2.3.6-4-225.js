var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, 0, wrapTestObject({
            value: true,
            writable: false,
            configurable: false
        }));
        try {
            Object.defineProperty(arrObj, '0', wrapTestObject({ value: false }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '0', true, false, false, false);
        }
    });
runTestCase(testcase);