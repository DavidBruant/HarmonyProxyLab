var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var preCheck = Object.isExtensible(obj);
        Object.preventExtensions(obj);
        return preCheck && !Object.isExtensible(obj);
    });
runTestCase(testcase);