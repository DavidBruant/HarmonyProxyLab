var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        try {
            JSON.enumerable = true;
            Object.defineProperties(obj, wrapTestObject({ prop: JSON }));
            for (var property in obj) {
                if (property === 'prop') {
                    accessed = true;
                }
            }
            return accessed;
        } finally {
            delete JSON.enumerable;
        }
    });
runTestCase(testcase);