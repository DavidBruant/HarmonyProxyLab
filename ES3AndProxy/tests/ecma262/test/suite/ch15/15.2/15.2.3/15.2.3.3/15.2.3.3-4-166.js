var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'test');
        if (desc.value === RegExp.prototype.test && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);