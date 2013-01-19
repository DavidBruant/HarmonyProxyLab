wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    var preCheck = Object.isExtensible(arrObj);
    Object.preventExtensions(arrObj);
    arrObj.exName = 2;
    return preCheck && !arrObj.hasOwnProperty('exName');
});
runTestCase(testcase);