wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 'length', wrapTestObject({ value: '2E3' }));
    return arrObj.length === 2000;
});
runTestCase(testcase);