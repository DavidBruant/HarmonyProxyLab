wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Object, 'getOwnPropertyNames');
    if (desc.value === Object.getOwnPropertyNames && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);