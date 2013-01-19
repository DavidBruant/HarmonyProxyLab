var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, 0, wrapTestObject({
            value: 101,
            writable: false,
            configurable: false
        }));
        try {
            Object.defineProperty(arrObj, '0', wrapTestObject({ value: 123 }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '0', 101, false, false, false);
        }
    });
runTestCase(testcase);