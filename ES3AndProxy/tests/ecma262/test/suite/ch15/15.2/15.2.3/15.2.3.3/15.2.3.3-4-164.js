var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'compile');
        if (desc.value === RegExp.prototype.compile && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);