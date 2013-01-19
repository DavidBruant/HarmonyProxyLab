wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    arrObj.length = 3;
    Object.defineProperty(arrObj, '1', wrapTestObject({ value: 14 }));
    return arrObj.length === 3 && arrObj[1] === 14;
});
runTestCase(testcase);