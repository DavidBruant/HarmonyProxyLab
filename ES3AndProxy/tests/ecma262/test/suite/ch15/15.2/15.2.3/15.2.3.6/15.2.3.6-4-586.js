wrapTestObject(function testcase() {
    var data = 'data';
    try {
        Object.defineProperty(Object.prototype, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return data;
            }),
            enumerable: false,
            configurable: true
        }));
        JSON.prop = 'myOwnProperty';
        return !JSON.hasOwnProperty('prop') && JSON.prop === 'data' && data === 'data';
    } finally {
        delete Object.prototype.prop;
    }
});
runTestCase(testcase);