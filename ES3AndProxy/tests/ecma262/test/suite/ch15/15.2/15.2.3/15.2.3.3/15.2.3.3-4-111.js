wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Math, 'sin');
    if (desc.value === Math.sin && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);