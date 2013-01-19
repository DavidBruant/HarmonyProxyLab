wrapTestObject(function testcase() {
    var booleanObj = wrapTestObject(new Boolean(false));
    booleanObj.writable = true;
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: booleanObj }));
    var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
    newObj.prop = 'isWritable';
    var afterWrite = newObj.prop === 'isWritable';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);