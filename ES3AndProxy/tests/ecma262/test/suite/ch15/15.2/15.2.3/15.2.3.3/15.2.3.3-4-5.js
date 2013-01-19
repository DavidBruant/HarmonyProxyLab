wrapTestObject(function testcase() {
    var global = fnGlobalObject();
    var desc = Object.getOwnPropertyDescriptor(global, 'parseInt');
    if (desc.value === global.parseInt && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);