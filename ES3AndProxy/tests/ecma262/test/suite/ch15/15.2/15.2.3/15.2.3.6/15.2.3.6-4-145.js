var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        try {
            Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 'two' }));
            return false;
        } catch (e) {
            return e instanceof RangeError;
        }
    });
runTestCase(testcase);