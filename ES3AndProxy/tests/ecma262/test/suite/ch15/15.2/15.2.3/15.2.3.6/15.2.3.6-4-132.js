wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 12 }));
    return arrObj.length === 12;
});
runTestCase(testcase);