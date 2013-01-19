wrapTestObject(function testcase() {
    try {
        Object.defineProperty(JSON, 'prop', wrapTestObject({
            value: 11,
            writable: true,
            configurable: true
        }));
        var hasProperty = JSON.hasOwnProperty('prop') && JSON.prop === 11;
        Object.defineProperties(JSON, wrapTestObject({ prop: wrapTestObject({ value: 12 }) }));
        return hasProperty && JSON.prop === 12;
    } finally {
        delete JSON.prop;
    }
});
runTestCase(testcase);