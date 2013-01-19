var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        try {
            String.prototype.enumerable = true;
            var strObj = wrapTestObject(new String());
            Object.defineProperty(obj, 'property', strObj);
            for (var prop in obj) {
                if (prop === 'property') {
                    accessed = true;
                }
            }
            return accessed;
        } finally {
            delete String.prototype.enumerable;
        }
    });
runTestCase(testcase);