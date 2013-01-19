var testcase = wrapTestObject(function testcase() {
        var array = wrapTestObject([
                1,
                2,
                3
            ]);
        array.writable = true;
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: array }));
        var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
        newObj.prop = 'isWritable';
        var afterWrite = newObj.prop === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);