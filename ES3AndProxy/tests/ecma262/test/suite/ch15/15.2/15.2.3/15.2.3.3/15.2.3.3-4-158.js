var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Date.prototype, 'toLocaleDateString');
        if (desc.value === Date.prototype.toLocaleDateString && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);