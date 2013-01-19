wrapTestObject(function testcase() {
    var global = fnGlobalObject();
    var desc = Object.getOwnPropertyDescriptor(global, 'parseFloat');
    if (desc.value === global.parseFloat && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);