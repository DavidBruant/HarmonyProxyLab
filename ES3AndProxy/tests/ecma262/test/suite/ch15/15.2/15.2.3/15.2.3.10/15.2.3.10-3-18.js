wrapTestObject(function testcase() {
    var dateObj = wrapTestObject(new Date());
    var preCheck = Object.isExtensible(dateObj);
    Object.preventExtensions(dateObj);
    dateObj.exName = 2;
    return preCheck && !dateObj.hasOwnProperty('exName');
});
runTestCase(testcase);