var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Object.prototype, 'toLocaleString');
        if (desc.value === Object.prototype.toLocaleString && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);