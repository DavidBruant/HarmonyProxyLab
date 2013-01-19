wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var arrObj = wrapTestObject([
            1,
            2,
            3
        ]);
    arrObj.value = 'Array';
    Object.defineProperty(obj, 'property', arrObj);
    return obj.property === 'Array';
});
runTestCase(testcase);