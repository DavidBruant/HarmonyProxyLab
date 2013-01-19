var testcase = wrapTestObject(function testcase() {
        try {
            fnGlobalObject().writable = true;
            var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: fnGlobalObject() }));
            var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
            newObj.prop = 'isWritable';
            var afterWrite = newObj.prop === 'isWritable';
            return beforeWrite === true && afterWrite === true;
        } finally {
            delete fnGlobalObject().writable;
        }
    });
runTestCase(testcase);