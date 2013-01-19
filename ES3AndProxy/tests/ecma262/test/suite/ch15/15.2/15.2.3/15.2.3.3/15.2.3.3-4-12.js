wrapTestObject(function testcase() {
    var global = fnGlobalObject();
    var desc = Object.getOwnPropertyDescriptor(global, 'escape');
    if (desc.value === global.escape && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);