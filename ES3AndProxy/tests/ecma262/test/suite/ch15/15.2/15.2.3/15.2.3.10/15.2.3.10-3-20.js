var testcase = wrapTestObject(function testcase() {
        var errObj = wrapTestObject(new Error());
        var preCheck = Object.isExtensible(errObj);
        Object.preventExtensions(errObj);
        errObj.exName = 2;
        return preCheck && !errObj.hasOwnProperty('exName');
    });
runTestCase(testcase);