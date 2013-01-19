var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, 4294967294, wrapTestObject({ value: 100 }));
        return arrObj.hasOwnProperty('4294967294') && arrObj.length === 4294967295 && arrObj[4294967294] === 100;
    });
runTestCase(testcase);