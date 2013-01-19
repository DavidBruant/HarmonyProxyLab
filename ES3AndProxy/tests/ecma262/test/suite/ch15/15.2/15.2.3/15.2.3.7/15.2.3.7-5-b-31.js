var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        try {
            fnGlobalObject().enumerable = true;
            Object.defineProperties(obj, wrapTestObject({ prop: fnGlobalObject() }));
            for (var property in obj) {
                if (property === 'prop') {
                    accessed = true;
                }
            }
            return accessed;
        } finally {
            delete fnGlobalObject().enumerable;
        }
    });
runTestCase(testcase);