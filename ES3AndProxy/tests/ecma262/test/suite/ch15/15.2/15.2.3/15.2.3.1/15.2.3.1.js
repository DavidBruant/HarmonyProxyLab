wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Object, 'prototype');
    if (desc.writable === false && desc.enumerable === false && desc.configurable === false) {
        return true;
    }
});
runTestCase(testcase);