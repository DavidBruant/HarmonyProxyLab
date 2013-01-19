var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                1,
                2,
                3
            ]);
        Object.defineProperty(arrObj, 'length', wrapTestObject({ writable: false }));
        try {
            Object.defineProperty(arrObj, 1, wrapTestObject({ value: 'abc' }));
            return true;
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);