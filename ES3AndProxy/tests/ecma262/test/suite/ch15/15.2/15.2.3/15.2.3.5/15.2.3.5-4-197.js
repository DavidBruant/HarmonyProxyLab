var testcase = wrapTestObject(function testcase() {
        var dateObj = wrapTestObject(new Date());
        dateObj.writable = true;
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: dateObj }));
        var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
        newObj.prop = 'isWritable';
        var afterWrite = newObj.prop === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);