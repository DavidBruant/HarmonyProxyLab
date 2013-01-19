var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        try {
            Date.prototype.enumerable = true;
            var dateObj = wrapTestObject(new Date());
            Object.defineProperty(obj, 'property', dateObj);
            for (var prop in obj) {
                if (prop === 'property') {
                    accessed = true;
                }
            }
            return accessed;
        } finally {
            delete Date.prototype.enumerable;
        }
    });
runTestCase(testcase);