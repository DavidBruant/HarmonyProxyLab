var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(String.prototype, 'trim');
        if (desc.value === String.prototype.trim && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);