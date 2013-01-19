var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Date.prototype, 'toGMTString');
        if (desc.value === Date.prototype.toGMTString && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);