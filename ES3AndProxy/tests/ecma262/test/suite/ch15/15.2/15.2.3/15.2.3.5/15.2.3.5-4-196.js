wrapTestObject(function testcase() {
    try {
        Math.writable = true;
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: Math }));
        var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
        newObj.prop = 'isWritable';
        var afterWrite = newObj.prop === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    } finally {
        delete Math.writable;
    }
});
runTestCase(testcase);