var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(Function.prototype);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);