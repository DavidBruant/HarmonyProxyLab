var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var preCheck = Object.isExtensible(obj);
        Object.preventExtensions(obj);
        obj.exName = 2;
        return preCheck && !Object.hasOwnProperty('exName');
    });
runTestCase(testcase);