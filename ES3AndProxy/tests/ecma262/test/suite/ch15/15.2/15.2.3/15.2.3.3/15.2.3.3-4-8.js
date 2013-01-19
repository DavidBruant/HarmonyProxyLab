wrapTestObject(function testcase() {
    var global = fnGlobalObject();
    var desc = Object.getOwnPropertyDescriptor(global, 'isFinite');
    if (desc.value === global.isFinite && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);