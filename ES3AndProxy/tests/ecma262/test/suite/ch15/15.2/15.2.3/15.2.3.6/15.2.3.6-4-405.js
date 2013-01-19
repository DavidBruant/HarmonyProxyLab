wrapTestObject(function testcase() {
    try {
        Object.defineProperty(Number.prototype, 'prop', wrapTestObject({
            value: 1001,
            writable: false,
            enumerable: false,
            configurable: true
        }));
        var numObj = wrapTestObject(new Number());
        numObj.prop = 1002;
        return !numObj.hasOwnProperty('prop') && numObj.prop === 1001;
    } finally {
        delete Number.prototype.prop;
    }
});
runTestCase(testcase);