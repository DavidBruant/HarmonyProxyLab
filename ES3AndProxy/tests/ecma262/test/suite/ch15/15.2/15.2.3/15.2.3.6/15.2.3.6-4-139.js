var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        try {
            Object.defineProperty(arrObj, 'length', wrapTestObject({ value: '200.59' }));
            return false;
        } catch (e) {
            return e instanceof RangeError;
        }
    });
runTestCase(testcase);