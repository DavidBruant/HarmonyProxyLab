wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'property': 100 });
    var desc = Object.getOwnPropertyDescriptor(obj, 'property');
    return desc instanceof Object;
});
runTestCase(testcase);