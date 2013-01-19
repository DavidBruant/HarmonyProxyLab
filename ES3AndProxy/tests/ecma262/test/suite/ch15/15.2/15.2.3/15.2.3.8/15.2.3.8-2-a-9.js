var testcase = wrapTestObject(function testcase() {
        var strObj = wrapTestObject(new String('abc'));
        strObj.foo = 10;
        var preCheck = Object.isExtensible(strObj);
        Object.seal(strObj);
        delete strObj.foo;
        return preCheck && strObj.foo === 10;
    });
runTestCase(testcase);