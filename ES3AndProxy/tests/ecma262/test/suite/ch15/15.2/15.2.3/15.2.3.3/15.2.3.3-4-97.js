var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Math, 'acos');
        if (desc.value === Math.acos && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);