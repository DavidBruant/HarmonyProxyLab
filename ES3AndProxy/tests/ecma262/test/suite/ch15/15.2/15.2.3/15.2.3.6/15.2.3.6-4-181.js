var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                0,
                1
            ]);
        Object.defineProperty(arrObj, 'length', wrapTestObject({
            value: 0,
            writable: false
        }));
        arrObj.length = 10;
        return !arrObj.hasOwnProperty('1') && arrObj.length === 0;
    });
runTestCase(testcase);