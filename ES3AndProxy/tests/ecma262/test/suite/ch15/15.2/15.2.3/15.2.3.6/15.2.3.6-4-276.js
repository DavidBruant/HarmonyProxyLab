wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '5', wrapTestObject({ value: 3 }));
    return arrObj.length === 6 && arrObj[5] === 3;
});
runTestCase(testcase);