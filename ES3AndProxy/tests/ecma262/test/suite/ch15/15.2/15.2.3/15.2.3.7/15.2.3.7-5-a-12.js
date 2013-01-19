var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Math.prop = wrapTestObject({ value: 12 });
            Object.defineProperties(obj, Math);
            return obj.hasOwnProperty('prop') && obj.prop === 12;
        } finally {
            delete Math.prop;
        }
    });
runTestCase(testcase);