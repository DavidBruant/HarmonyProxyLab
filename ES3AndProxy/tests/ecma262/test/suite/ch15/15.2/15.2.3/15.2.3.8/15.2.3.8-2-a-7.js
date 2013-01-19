var testcase = wrapTestObject(function testcase() {
        var funObj = wrapTestObject(function () {
            });
        funObj.foo = 10;
        var preCheck = Object.isExtensible(funObj);
        Object.seal(funObj);
        delete funObj.foo;
        return preCheck && funObj.foo === 10;
    });
runTestCase(testcase);