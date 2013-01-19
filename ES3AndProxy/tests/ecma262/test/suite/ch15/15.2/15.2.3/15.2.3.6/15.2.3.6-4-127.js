var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                0,
                1
            ]);
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: false }));
        return arrObj.length === 0 && !arrObj.hasOwnProperty('0') && !arrObj.hasOwnProperty('1');
    });
runTestCase(testcase);