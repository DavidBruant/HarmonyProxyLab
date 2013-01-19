wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var tempObj = wrapTestObject({ testproperty: 100 });
    Object.defineProperty(obj, 'prop', wrapTestObject({ value: tempObj }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.prop === tempObj && desc.value === tempObj;
});
runTestCase(testcase);