wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Math, 'random');
    if (desc.value === Math.random && desc.writable === true && desc.enumerable === false && desc.configurable === true) {
        return true;
    }
});
runTestCase(testcase);