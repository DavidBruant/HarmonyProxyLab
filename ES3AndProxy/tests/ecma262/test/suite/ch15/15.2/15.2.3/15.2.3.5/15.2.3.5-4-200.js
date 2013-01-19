wrapTestObject(function testcase() {
    var errorObj = wrapTestObject(new Error());
    errorObj.writable = true;
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: errorObj }));
    var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
    newObj.prop = 'isWritable';
    var afterWrite = newObj.prop === 'isWritable';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);