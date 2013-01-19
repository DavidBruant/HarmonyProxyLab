wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var strObj = wrapTestObject(new String('abc'));
    strObj.value = 'String';
    Object.defineProperty(obj, 'property', strObj);
    return obj.property === 'String';
});
runTestCase(testcase);