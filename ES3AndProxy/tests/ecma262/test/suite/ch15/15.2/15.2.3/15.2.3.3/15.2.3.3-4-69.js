wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(String.prototype, 'replace');
    if (desc.value === String.prototype.replace && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);