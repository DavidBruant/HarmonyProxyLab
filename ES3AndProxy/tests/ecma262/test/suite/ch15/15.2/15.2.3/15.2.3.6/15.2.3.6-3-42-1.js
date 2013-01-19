var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        try {
            Error.prototype.enumerable = true;
            var errObj = wrapTestObject(new Error());
            Object.defineProperty(obj, 'property', errObj);
            for (var prop in obj) {
                if (prop === 'property') {
                    accessed = true;
                }
            }
            return accessed;
        } finally {
            delete Error.prototype.enumerable;
        }
    });
runTestCase(testcase);