var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                0,
                1
            ]);
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 1 }));
        return !arrObj.hasOwnProperty('1');
    });
runTestCase(testcase);