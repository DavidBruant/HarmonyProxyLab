wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'prop', wrapTestObject({ value: 1001 }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.prop === 1001 && desc.value === 1001;
});
runTestCase(testcase);