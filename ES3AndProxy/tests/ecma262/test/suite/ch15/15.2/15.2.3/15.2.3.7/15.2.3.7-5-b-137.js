var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            fnGlobalObject().value = 'global';
            Object.defineProperties(obj, wrapTestObject({ property: fnGlobalObject() }));
            return obj.property === 'global';
        } finally {
            delete fnGlobalObject().value;
        }
    });
runTestCase(testcase);