wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'false': 1 });
    var desc = Object.getOwnPropertyDescriptor(obj, false);
    return desc.value === 1;
});
runTestCase(testcase);