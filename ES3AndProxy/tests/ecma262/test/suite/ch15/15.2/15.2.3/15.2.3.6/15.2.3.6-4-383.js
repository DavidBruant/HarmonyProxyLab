wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'prop', wrapTestObject({ value: 'ThisIsAString' }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.prop === 'ThisIsAString' && desc.value === 'ThisIsAString';
});
runTestCase(testcase);