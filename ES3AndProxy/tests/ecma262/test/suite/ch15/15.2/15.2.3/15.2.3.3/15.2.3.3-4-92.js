var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Number.prototype, 'toExponential');
        if (desc.value === Number.prototype.toExponential && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);