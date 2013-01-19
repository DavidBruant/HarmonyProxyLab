var testcase = wrapTestObject(function testcase() {
        var proto = Object.getPrototypeOf(fnGlobalObject());
        return proto.isPrototypeOf(fnGlobalObject()) === true;
    });
runTestCase(testcase);