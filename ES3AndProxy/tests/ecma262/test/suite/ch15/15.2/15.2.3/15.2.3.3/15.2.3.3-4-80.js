var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(String.prototype, 'toLocaleUpperCase');
        if (desc.value === String.prototype.toLocaleUpperCase && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);