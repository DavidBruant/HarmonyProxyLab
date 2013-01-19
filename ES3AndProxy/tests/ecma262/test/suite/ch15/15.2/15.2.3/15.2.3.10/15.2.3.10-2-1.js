var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var testResult1 = true;
        var testResult2 = true;
        var preCheck = Object.isExtensible(obj);
        Object.preventExtensions(obj);
        testResult1 = Object.isExtensible(obj);
        Object.preventExtensions(obj);
        testResult2 = Object.isExtensible(obj);
        return preCheck && !testResult1 && !testResult2;
    });
runTestCase(testcase);