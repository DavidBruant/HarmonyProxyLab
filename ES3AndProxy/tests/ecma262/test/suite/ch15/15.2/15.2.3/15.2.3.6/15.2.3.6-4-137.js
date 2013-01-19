wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 'length', wrapTestObject({ value: '2' }));
    return arrObj.length === 2;
});
runTestCase(testcase);