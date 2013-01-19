var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        try {
            Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 4294967296 }));
            return false;
        } catch (e) {
            return e instanceof RangeError;
        }
    });
runTestCase(testcase);