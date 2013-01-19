var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, '0', wrapTestObject({ value: 12 }));
        return arrObj[0] === 12;
    });
runTestCase(testcase);