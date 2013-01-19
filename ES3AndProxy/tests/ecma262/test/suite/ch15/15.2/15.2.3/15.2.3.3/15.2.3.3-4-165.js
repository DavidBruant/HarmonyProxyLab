var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'exec');
        if (desc.value === RegExp.prototype.exec && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);