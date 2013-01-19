var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        try {
            Boolean.prototype.enumerable = true;
            var boolObj = wrapTestObject(new Boolean(true));
            Object.defineProperty(obj, 'property', boolObj);
            for (var prop in obj) {
                if (prop === 'property') {
                    accessed = true;
                }
            }
            return accessed;
        } finally {
            delete Boolean.prototype.enumerable;
        }
    });
runTestCase(testcase);