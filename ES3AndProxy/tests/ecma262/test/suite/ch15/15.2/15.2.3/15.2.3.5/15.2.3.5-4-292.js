wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ set: undefined }) }));
    newObj.prop = 'overrideData';
    return newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
});
runTestCase(testcase);