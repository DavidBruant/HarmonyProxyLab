var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Function.prototype, 'constructor');
        if (desc.value === Function.prototype.constructor && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);