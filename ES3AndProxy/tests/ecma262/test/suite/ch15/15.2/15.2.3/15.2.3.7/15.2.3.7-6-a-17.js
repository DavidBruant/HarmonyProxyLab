var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(Math, 'prop', wrapTestObject({
                value: 11,
                writable: true,
                configurable: true
            }));
            var hasProperty = Math.hasOwnProperty('prop') && Math.prop === 11;
            Object.defineProperties(Math, wrapTestObject({ prop: wrapTestObject({ value: 12 }) }));
            return hasProperty && Math.prop === 12;
        } finally {
            delete Math.prop;
        }
    });
runTestCase(testcase);