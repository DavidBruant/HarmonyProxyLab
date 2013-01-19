wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Object.prototype, 'propertyIsEnumerable');
    if (desc.value === Object.prototype.propertyIsEnumerable && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);