wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Date.prototype, 'setDate');
    if (desc.value === Date.prototype.setDate && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);