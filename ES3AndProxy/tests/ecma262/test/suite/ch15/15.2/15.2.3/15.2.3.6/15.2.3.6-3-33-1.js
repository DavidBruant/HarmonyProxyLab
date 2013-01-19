var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        try {
            Function.prototype.enumerable = true;
            var fun = wrapTestObject(function () {
                });
            Object.defineProperty(obj, 'property', fun);
            for (var prop in obj) {
                if (prop === 'property') {
                    accessed = true;
                }
            }
            return accessed;
        } finally {
            delete Function.prototype.enumerable;
        }
    });
runTestCase(testcase);