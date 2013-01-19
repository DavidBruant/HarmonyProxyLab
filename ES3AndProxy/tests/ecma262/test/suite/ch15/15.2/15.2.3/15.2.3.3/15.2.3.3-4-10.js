wrapTestObject(function testcase() {
    var global = fnGlobalObject();
    var desc = Object.getOwnPropertyDescriptor(global, 'decodeURIComponent');
    if (desc.value === global.decodeURIComponent && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);