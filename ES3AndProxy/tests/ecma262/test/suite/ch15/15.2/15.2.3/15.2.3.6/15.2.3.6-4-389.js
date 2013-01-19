wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var boolObj = wrapTestObject(new Boolean());
    Object.defineProperty(obj, 'prop', wrapTestObject({ value: boolObj }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.prop === boolObj && desc.value === boolObj;
});
runTestCase(testcase);