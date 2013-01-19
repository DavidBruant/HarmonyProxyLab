var testcase = wrapTestObject(function testcase() {
        var global = fnGlobalObject();
        var desc = Object.getOwnPropertyDescriptor(global, 'isNaN');
        if (desc.value === global.isNaN && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);