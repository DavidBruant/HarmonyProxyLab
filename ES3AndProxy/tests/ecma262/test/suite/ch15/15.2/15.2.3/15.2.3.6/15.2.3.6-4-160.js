var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                0,
                ,
                2
            ]);
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 3 }));
        return arrObj.length === 3 && arrObj[0] === 0 && !arrObj.hasOwnProperty('1') && arrObj[2] === 2;
    });
runTestCase(testcase);