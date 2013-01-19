var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            fnGlobalObject().writable = false;
            Object.defineProperties(obj, wrapTestObject({ property: fnGlobalObject() }));
            obj.property = 'isWritable';
            return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
        } finally {
            delete fnGlobalObject().writable;
        }
    });
runTestCase(testcase);