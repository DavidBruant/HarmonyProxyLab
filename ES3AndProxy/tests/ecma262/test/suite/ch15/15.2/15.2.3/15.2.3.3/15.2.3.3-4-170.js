var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(EvalError.prototype, 'constructor');
        if (desc.value === EvalError.prototype.constructor && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);