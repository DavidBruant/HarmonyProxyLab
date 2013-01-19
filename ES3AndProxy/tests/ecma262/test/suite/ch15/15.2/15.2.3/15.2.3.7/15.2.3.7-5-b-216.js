var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            fnGlobalObject().get = wrapTestObject(function () {
                return 'global';
            });
            Object.defineProperties(obj, wrapTestObject({ property: fnGlobalObject() }));
            return obj.property === 'global';
        } finally {
            delete fnGlobalObject().get;
        }
    });
runTestCase(testcase);