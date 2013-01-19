wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Date.prototype, 'toDateString');
    if (desc.value === Date.prototype.toDateString && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);