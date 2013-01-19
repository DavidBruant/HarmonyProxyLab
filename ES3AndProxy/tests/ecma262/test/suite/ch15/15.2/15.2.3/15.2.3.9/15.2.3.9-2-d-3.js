var testcase = wrapTestObject(function testcase() {
        var strObj = wrapTestObject(new String('a'));
        Object.freeze(strObj);
        return Object.isFrozen(strObj);
    });
runTestCase(testcase);