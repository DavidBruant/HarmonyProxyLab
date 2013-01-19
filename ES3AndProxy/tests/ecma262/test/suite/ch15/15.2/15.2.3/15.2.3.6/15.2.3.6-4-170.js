var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                0,
                1
            ]);
        try {
            Object.defineProperty(arrObj, '1', wrapTestObject({ configurable: false }));
            Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 1 }));
            return false;
        } catch (e) {
            return e instanceof TypeError && arrObj.length === 2 && arrObj.hasOwnProperty('1');
        }
    });
runTestCase(testcase);