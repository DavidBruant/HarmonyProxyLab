var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Math, 'tan');
        if (desc.value === Math.tan && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);