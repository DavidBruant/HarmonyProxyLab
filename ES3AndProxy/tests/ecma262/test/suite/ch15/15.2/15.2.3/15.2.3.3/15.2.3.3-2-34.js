wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'undefined': 1 });
    var desc = Object.getOwnPropertyDescriptor(obj, 'undefined');
    return desc.value === 1;
});
runTestCase(testcase);