wrapTestObject(function testcase() {
    var obj = wrapTestObject({ property: 'ownDataProperty' });
    var desc = Object.getOwnPropertyDescriptor(obj, 'propertyNonExist');
    return typeof desc === 'undefined';
});
runTestCase(testcase);