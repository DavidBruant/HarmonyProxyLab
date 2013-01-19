var testcase = wrapTestObject(function testcase() {
        var errObj = wrapTestObject(new Error());
        errObj.foo = 10;
        var preCheck = Object.isExtensible(errObj);
        Object.seal(errObj);
        delete errObj.foo;
        return preCheck && errObj.foo === 10;
    });
runTestCase(testcase);