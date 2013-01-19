wrapTestObject(function testcase() {
    var obj = wrapTestObject({ '123': 1 });
    var desc = Object.getOwnPropertyDescriptor(obj, 123);
    return desc.value === 1;
});
runTestCase(testcase);