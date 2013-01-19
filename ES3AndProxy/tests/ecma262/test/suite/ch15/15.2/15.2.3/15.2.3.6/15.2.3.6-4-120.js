var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        try {
            Object.defineProperty(arrObj, 'length', wrapTestObject({ configurable: true }));
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);