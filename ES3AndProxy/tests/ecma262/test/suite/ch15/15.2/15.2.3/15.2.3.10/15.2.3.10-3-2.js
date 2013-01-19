wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var preCheck = Object.isExtensible(obj);
    Object.preventExtensions(obj);
    obj[0] = 12;
    return preCheck && !obj.hasOwnProperty('0');
});
runTestCase(testcase);