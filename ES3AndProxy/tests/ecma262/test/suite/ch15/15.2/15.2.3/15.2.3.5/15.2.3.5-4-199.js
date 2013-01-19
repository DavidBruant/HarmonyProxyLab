var testcase = wrapTestObject(function testcase() {
        try {
            JSON.writable = true;
            var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: JSON }));
            var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
            newObj.prop = 'isWritable';
            var afterWrite = newObj.prop === 'isWritable';
            return beforeWrite === true && afterWrite === true;
        } finally {
            delete JSON.writable;
        }
    });
runTestCase(testcase);