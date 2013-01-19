wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    var preCheck = Object.isExtensible(arrObj);
    Object.preventExtensions(arrObj);
    arrObj[0] = 12;
    return preCheck && !arrObj.hasOwnProperty('0');
});
runTestCase(testcase);