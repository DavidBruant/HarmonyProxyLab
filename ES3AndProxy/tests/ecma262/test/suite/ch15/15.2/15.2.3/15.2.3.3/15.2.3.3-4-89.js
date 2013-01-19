var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Number.prototype, 'toString');
        if (desc.value === Number.prototype.toString && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);