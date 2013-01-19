wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(String.prototype, 'charAt');
    if (desc.value === String.prototype.charAt && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);