wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var numObj = wrapTestObject(new Number());
    Object.defineProperty(obj, 'prop', wrapTestObject({ value: numObj }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.prop === numObj && desc.value === numObj;
});
runTestCase(testcase);