var testcase = wrapTestObject(function testcase() {
        var strObj = wrapTestObject(new String('bbq'));
        var preCheck = Object.isExtensible(strObj);
        Object.preventExtensions(strObj);
        strObj.exName = 2;
        return preCheck && !strObj.hasOwnProperty('exName');
    });
runTestCase(testcase);