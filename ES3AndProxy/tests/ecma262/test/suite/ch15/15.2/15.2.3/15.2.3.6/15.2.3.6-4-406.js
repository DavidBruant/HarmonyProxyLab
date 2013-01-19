var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(Function.prototype, 'prop', wrapTestObject({
                value: 1001,
                writable: false,
                enumerable: false,
                configurable: true
            }));
            var funObj = wrapTestObject(function () {
                });
            var verifyEnumerable = false;
            for (var p in funObj) {
                if (p === 'prop') {
                    verifyEnumerable = true;
                }
            }
            return !funObj.hasOwnProperty('prop') && !verifyEnumerable;
        } finally {
            delete Function.prototype.prop;
        }
    });
runTestCase(testcase);