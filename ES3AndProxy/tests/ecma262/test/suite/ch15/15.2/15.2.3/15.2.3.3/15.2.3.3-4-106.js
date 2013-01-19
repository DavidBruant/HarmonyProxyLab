wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Math, 'max');
    if (desc.value === Math.max && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);