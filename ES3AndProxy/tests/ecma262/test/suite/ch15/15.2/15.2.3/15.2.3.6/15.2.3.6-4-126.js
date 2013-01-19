wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([
            0,
            1
        ]);
    Object.defineProperty(arrObj, 'length', wrapTestObject({ value: null }));
    return arrObj.length === 0;
});
runTestCase(testcase);