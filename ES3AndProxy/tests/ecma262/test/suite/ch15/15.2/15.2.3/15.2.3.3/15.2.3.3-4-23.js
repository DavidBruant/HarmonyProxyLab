wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Object, 'isSealed');
    if (desc.value === Object.isSealed && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);