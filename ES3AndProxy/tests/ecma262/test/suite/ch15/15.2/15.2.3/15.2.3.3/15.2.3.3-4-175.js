var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(URIError.prototype, 'constructor');
        if (desc.value === URIError.prototype.constructor && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);