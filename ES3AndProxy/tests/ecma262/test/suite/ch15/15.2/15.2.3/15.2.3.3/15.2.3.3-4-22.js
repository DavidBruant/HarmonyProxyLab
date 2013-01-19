wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Object, 'preventExtensions');
    if (desc.value === Object.preventExtensions && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);