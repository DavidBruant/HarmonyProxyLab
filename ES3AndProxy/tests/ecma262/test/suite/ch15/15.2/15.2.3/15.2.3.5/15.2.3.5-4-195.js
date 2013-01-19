wrapTestObject(function testcase() {
    var numObj = wrapTestObject(new Number(123));
    numObj.writable = true;
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: numObj }));
    var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
    newObj.prop = 'isWritable';
    var afterWrite = newObj.prop === 'isWritable';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);