var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Date.prototype, 'setUTCSeconds');
        if (desc.value === Date.prototype.setUTCSeconds && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);