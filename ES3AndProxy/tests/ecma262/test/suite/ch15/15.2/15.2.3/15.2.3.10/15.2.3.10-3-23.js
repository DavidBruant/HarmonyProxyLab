var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ prop: 12 });
        var preCheck = Object.isExtensible(obj);
        Object.preventExtensions(obj);
        obj.prop = -1;
        return preCheck && obj.prop === -1;
    });
runTestCase(testcase);