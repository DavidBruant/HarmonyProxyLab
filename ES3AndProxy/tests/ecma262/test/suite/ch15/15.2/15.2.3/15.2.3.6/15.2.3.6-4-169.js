var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                0,
                1,
                2
            ]);
        Object.defineProperty(arrObj, '1', wrapTestObject({ configurable: false }));
        Object.defineProperty(arrObj, '2', wrapTestObject({ configurable: true }));
        try {
            Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 1 }));
            return false;
        } catch (e) {
            return e instanceof TypeError && arrObj.length === 2 && !arrObj.hasOwnProperty('2');
        }
    });
runTestCase(testcase);