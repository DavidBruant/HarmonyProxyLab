var testcase = wrapTestObject(function testcase() {
        var str = wrapTestObject(new String('abc'));
        str.writable = true;
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: str }));
        var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
        newObj.prop = 'isWritable';
        var afterWrite = newObj.prop === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);