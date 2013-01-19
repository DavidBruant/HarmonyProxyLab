var testcase = wrapTestObject(function testcase() {
        var global = fnGlobalObject();
        var desc = Object.getOwnPropertyDescriptor(global, 'encodeURIComponent');
        if (desc.value === global.encodeURIComponent && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);