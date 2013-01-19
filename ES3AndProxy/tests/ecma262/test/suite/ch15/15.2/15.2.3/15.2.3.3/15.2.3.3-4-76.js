var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(String.prototype, 'toString');
        if (desc.value === String.prototype.toString && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);