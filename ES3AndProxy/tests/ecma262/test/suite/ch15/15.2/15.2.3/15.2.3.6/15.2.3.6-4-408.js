var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(Date.prototype, 'prop', wrapTestObject({
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            }));
            var dateObj = wrapTestObject(new Date());
            dateObj.prop = 1002;
            return dateObj.hasOwnProperty('prop') && dateObj.prop === 1002;
        } finally {
            delete Date.prototype.prop;
        }
    });
runTestCase(testcase);