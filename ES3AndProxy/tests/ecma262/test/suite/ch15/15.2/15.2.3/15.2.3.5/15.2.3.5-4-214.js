wrapTestObject(function testcase() {
    var descObj = wrapTestObject({ writable: '' });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    var hasProperty = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
    newObj.prop = 121;
    return hasProperty && typeof newObj.prop === 'undefined';
});
runTestCase(testcase);