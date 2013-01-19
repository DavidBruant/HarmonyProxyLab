wrapTestObject(function testcase() {
    var f = Function('return 42;');
    var desc = Object.getOwnPropertyDescriptor(f, 'length');
    if (desc.writable === false && desc.enumerable === false && desc.configurable === false && desc.hasOwnProperty('get') === false && desc.hasOwnProperty('set') === false) {
        return true;
    }
});
runTestCase(testcase);