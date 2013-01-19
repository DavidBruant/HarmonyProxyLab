var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                0,
                1
            ]);
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 0 }));
        return arrObj.length === 0;
    });
runTestCase(testcase);