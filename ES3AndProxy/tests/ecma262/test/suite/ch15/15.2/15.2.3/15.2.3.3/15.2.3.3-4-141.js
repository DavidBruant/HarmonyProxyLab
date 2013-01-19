wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Date.prototype, 'setHours');
    if (desc.value === Date.prototype.setHours && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);