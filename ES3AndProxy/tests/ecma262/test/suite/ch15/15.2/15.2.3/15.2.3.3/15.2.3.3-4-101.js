wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Math, 'ceil');
    if (desc.value === Math.ceil && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);