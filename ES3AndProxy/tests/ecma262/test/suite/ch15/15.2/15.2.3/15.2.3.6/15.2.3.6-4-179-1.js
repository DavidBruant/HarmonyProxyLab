var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                0,
                1,
                2,
                3
            ]);
        Object.defineProperty(arrObj, '1', wrapTestObject({ configurable: false }));
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 3 }));
        return arrObj.length === 3;
    });
runTestCase(testcase);