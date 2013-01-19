wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Number, 'prototype');
    if (desc.writable === false && desc.enumerable === false && desc.configurable === false && desc.hasOwnProperty('get') === false && desc.hasOwnProperty('set') === false) {
        return true;
    }
});
runTestCase(testcase);