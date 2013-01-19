wrapTestObject(function testcase() {
    var numObj = wrapTestObject(new Number(123));
    var preCheck = Object.isExtensible(numObj);
    Object.preventExtensions(numObj);
    numObj.exName = 2;
    return preCheck && !numObj.hasOwnProperty('exName');
});
runTestCase(testcase);