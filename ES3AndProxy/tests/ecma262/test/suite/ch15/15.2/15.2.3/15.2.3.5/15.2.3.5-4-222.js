wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ writable: wrapTestObject(new Date()) }) }));
    var hasProperty = newObj.hasOwnProperty('prop');
    newObj.prop = 121;
    return hasProperty && newObj.prop === 121;
});
runTestCase(testcase);