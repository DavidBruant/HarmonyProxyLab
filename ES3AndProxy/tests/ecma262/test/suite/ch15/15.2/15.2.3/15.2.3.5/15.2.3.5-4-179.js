wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ value: 100 }) }));
    var beforeWrite = newObj.prop === 100;
    newObj.prop = 'isWritable';
    var afterWrite = newObj.prop === 100;
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);