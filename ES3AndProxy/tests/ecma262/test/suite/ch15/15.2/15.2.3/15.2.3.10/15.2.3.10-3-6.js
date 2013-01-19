var testcase = wrapTestObject(function testcase() {
        var boolObj = wrapTestObject(new Boolean(true));
        var preCheck = Object.isExtensible(boolObj);
        Object.preventExtensions(boolObj);
        boolObj[0] = 12;
        return preCheck && !boolObj.hasOwnProperty('0');
    });
runTestCase(testcase);