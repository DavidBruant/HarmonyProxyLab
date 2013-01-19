wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(String.prototype, 'concat');
    if (desc.value === String.prototype.concat && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);