wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({}) }));
    return typeof newObj.prop === 'undefined';
});
runTestCase(testcase);