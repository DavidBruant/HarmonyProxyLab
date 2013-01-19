wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var funObj = wrapTestObject(function () {
        });
    Object.defineProperty(obj, 'prop', wrapTestObject({ value: funObj }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.prop === funObj && desc.value === funObj;
});
runTestCase(testcase);