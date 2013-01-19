wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'prop', wrapTestObject({ value: undefined }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.hasOwnProperty('prop') && typeof obj.prop === 'undefined' && typeof desc.value === 'undefined';
});
runTestCase(testcase);