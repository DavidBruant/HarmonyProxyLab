var testcase = wrapTestObject(function testcase() {
        var boolObj = wrapTestObject(new Boolean(true));
        var preCheck = Object.isExtensible(boolObj);
        Object.preventExtensions(boolObj);
        boolObj.exName = 2;
        return preCheck && !boolObj.hasOwnProperty('exName');
    });
runTestCase(testcase);