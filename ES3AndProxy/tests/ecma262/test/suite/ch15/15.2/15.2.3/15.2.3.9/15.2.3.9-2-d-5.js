var testcase = wrapTestObject(function testcase() {
        var numObj = wrapTestObject(new Number(3));
        Object.freeze(numObj);
        return Object.isFrozen(numObj);
    });
runTestCase(testcase);