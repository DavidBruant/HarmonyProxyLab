var testcase = wrapTestObject(function testcase() {
        var strObj = wrapTestObject(new String('abc'));
        strObj.foo = 10;
        Object.freeze(strObj);
        var desc = Object.getOwnPropertyDescriptor(strObj, 'foo');
        delete strObj.foo;
        return strObj.foo === 10 && desc.configurable === false && desc.writable === false;
    });
runTestCase(testcase);