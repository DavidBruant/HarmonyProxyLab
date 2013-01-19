wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ value: 'ownDataProperty' }) }));
    return newObj.prop === 'ownDataProperty';
});
runTestCase(testcase);