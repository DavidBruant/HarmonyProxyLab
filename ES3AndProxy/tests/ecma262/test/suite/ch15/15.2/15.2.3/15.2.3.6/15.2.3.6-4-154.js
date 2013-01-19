var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 4294967294 }));
        return arrObj.length === 4294967294;
    });
runTestCase(testcase);