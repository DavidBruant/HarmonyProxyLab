var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Array.prototype, 'indexOf');
        if (desc.value === Array.prototype.indexOf && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);