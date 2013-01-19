var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            JSON.value = 'JSON';
            Object.defineProperties(obj, wrapTestObject({ property: JSON }));
            return obj.property === 'JSON';
        } finally {
            delete JSON.value;
        }
    });
runTestCase(testcase);