var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, 4294967295, wrapTestObject({ value: 100 }));
        return arrObj.hasOwnProperty('4294967295') && arrObj.length === 0 && arrObj[4294967295] === 100;
        ;
    });
runTestCase(testcase);