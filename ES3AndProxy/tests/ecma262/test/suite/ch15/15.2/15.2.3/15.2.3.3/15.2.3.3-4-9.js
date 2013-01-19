var testcase = wrapTestObject(function testcase() {
        var global = fnGlobalObject();
        var desc = Object.getOwnPropertyDescriptor(global, 'decodeURI');
        if (desc.value === global.decodeURI && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
            return true;
        }
    });
runTestCase(testcase);