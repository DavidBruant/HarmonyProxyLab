var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(String.prototype, 'toUpperCase');
        if (desc.value === String.prototype.toUpperCase && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);