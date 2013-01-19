var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        obj.foo = 10;
        var preCheck = Object.isExtensible(obj);
        Object.seal(obj);
        Object.seal(obj);
        return preCheck && Object.isSealed(obj);
    });
runTestCase(testcase);