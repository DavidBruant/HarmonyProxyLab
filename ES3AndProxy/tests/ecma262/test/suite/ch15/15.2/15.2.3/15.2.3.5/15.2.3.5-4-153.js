wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({}) }));
    return newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
});
runTestCase(testcase);