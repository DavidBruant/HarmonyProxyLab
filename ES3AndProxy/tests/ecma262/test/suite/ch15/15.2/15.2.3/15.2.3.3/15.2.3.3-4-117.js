wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Date.prototype, 'getTime');
    if (desc.value === Date.prototype.getTime && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);