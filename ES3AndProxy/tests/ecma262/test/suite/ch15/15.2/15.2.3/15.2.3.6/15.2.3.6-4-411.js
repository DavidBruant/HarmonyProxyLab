var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(Object.prototype, 'prop', wrapTestObject({
                value: 1001,
                writable: false,
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