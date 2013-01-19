var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(SyntaxError.prototype, 'constructor');
        if (desc.value === SyntaxError.prototype.constructor && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);