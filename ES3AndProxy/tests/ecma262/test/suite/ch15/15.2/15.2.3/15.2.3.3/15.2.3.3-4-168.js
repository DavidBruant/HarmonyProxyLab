var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Error.prototype, 'constructor');
        if (desc.value === Error.prototype.constructor && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);