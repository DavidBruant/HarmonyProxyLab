var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        try {
            Number.prototype.enumerable = true;
            var numObj = wrapTestObject(new Number(-2));
            Object.defineProperty(obj, 'property', numObj);
            for (var prop in obj) {
                if (prop === 'property') {
                    accessed = true;
                }
            }
            return accessed;
        } finally {
            delete Number.prototype.enumerable;
        }
    });
runTestCase(testcase);