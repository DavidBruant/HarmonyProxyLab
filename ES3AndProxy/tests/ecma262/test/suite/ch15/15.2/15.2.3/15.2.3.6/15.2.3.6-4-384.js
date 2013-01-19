wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'prop', wrapTestObject({ value: false }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.prop === false && desc.value === false;
});
runTestCase(testcase);