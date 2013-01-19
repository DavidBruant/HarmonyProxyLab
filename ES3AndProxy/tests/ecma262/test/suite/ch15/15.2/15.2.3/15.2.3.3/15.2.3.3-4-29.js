wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Object.prototype, 'valueOf');
    if (desc.value === Object.prototype.valueOf && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);