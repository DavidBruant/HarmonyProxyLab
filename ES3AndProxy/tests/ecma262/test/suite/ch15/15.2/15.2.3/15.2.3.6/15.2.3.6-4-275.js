wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    arrObj.length = 3;
    Object.defineProperty(arrObj, '3', wrapTestObject({ value: 3 }));
    return arrObj.length === 4 && arrObj[3] === 3;
});
runTestCase(testcase);