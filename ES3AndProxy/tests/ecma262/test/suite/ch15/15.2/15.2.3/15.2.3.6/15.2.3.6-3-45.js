var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        try {
            fnGlobalObject().enumerable = true;
            Object.defineProperty(obj, 'property', fnGlobalObject());
            for (var prop in obj) {
                if (prop === 'property') {
                    accessed = true;
                }
            }
            return accessed;
        } finally {
            delete fnGlobalObject().enumerable;
        }
    });
runTestCase(testcase);