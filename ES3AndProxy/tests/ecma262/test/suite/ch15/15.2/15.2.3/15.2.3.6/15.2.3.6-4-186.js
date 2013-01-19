wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 4294967297, wrapTestObject({ value: 100 }));
    return arrObj.hasOwnProperty('4294967297') && arrObj.length === 0 && arrObj[4294967297] === 100;
});
runTestCase(testcase);