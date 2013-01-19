wrapTestObject(function testcase() {
    var obj = wrapTestObject({ prop1: 1 });
    var array = Object.keys(obj);
    var desc = Object.getOwnPropertyDescriptor(array, '0');
    return desc.hasOwnProperty('value') && desc.value === 'prop1';
});
runTestCase(testcase);