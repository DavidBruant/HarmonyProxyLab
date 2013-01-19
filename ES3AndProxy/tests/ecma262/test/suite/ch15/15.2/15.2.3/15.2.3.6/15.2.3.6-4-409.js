var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(RegExp.prototype, 'prop', wrapTestObject({
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            }));
            var regObj = wrapTestObject(new RegExp());
            var verifyEnumerable = false;
            for (var p in regObj) {
                if (p === 'prop') {
                    verifyEnumerable = true;
                }
            }
            return !regObj.hasOwnProperty('prop') && verifyEnumerable;
        } finally {
            delete RegExp.prototype.prop;
        }
    });
runTestCase(testcase);