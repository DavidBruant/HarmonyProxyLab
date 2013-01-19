var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(Object.prototype, 'prop', wrapTestObject({
                value: 1001,
                writable: false,
                enumerable: false,
                configurable: true
            }));
            JSON.prop = 1002;
            return !JSON.hasOwnProperty('prop') && JSON.prop === 1001;
        } finally {
            delete Object.prototype.prop;
        }
    });
runTestCase(testcase);