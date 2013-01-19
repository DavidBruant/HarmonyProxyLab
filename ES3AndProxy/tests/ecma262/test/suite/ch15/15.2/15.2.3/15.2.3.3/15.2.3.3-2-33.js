wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'AB\n\\cd': 1 });
    var desc = Object.getOwnPropertyDescriptor(obj, 'AB\n\\cd');
    return desc.value === 1;
});
runTestCase(testcase);