var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(Boolean.prototype, 'prop', wrapTestObject({
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            }));
            var boolObj = wrapTestObject(new Boolean());
            var verifyEnumerable = false;
            for (var p in boolObj) {
                if (p === 'prop') {
                    verifyEnumerable = true;
                }
            }
            return !boolObj.hasOwnProperty('prop') && verifyEnumerable;
        } finally {
            delete Boolean.prototype.prop;
        }
    });
runTestCase(testcase);