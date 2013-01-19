var testcase = wrapTestObject(function testcase() {
        var regObj = wrapTestObject(new RegExp());
        regObj.writable = true;
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: regObj }));
        var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
        newObj.prop = 'isWritable';
        var afterWrite = newObj.prop === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);