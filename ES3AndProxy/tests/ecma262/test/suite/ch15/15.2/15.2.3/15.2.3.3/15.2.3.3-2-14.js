wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'Infinity': 1 });
    var desc = Object.getOwnPropertyDescriptor(obj, +Infinity);
    return desc.value === 1;
});
runTestCase(testcase);