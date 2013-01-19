var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Date.prototype, 'setSeconds');
        if (desc.value === Date.prototype.setSeconds && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);