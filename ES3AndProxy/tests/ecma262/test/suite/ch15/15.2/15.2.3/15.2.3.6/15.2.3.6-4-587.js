var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        try {
            Object.defineProperty(Object.prototype, 'prop', wrapTestObject({
                get: wrapTestObject(function () {
                    return data;
                }),
                enumerable: false,
                configurable: true
            }));
            var verifyEnumerable = false;
            for (var p in Math) {
                if (p === 'prop') {
                    verifyEnumerable = true;
                }
            }
            return !Math.hasOwnProperty('prop') && !verifyEnumerable;
        } finally {
            delete Object.prototype.prop;
        }
    });
runTestCase(testcase);