var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Date.prototype, 'setFullYear');
        if (desc.value === Date.prototype.setFullYear && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);