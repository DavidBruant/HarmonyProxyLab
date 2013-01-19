wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(String.prototype, 'substr');
    if (desc.value === String.prototype.substr && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);