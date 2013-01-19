var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Object, 'keys');
        if (desc.value === Object.keys && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);