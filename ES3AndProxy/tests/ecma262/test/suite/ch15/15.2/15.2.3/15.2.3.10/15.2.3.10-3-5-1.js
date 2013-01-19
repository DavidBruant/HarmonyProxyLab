wrapTestObject(function testcase() {
    var strObj = wrapTestObject(new String('bbq'));
    var preCheck = Object.isExtensible(strObj);
    Object.preventExtensions(strObj);
    strObj[10] = 12;
    return preCheck && !strObj.hasOwnProperty('10');
});
runTestCase(testcase);