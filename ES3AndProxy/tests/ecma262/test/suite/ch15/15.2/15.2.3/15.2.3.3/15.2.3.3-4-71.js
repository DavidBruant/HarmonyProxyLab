wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(String.prototype, 'slice');
    if (desc.value === String.prototype.slice && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);