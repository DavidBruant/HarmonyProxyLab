var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            JSON.writable = false;
            Object.defineProperties(obj, wrapTestObject({ property: JSON }));
            obj.property = 'isWritable';
            return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
        } finally {
            delete JSON.writable;
        }
    });
runTestCase(testcase);