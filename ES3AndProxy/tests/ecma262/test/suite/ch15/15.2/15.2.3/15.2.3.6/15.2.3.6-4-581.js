wrapTestObject(function testcase() {
    var data = 'data';
    try {
        Object.defineProperty(Number.prototype, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return data;
            }),
            enumerable: false,
            configurable: true
        }));
        var numObj = wrapTestObject(new Number());
        numObj.prop = 'myOwnProperty';
        return !numObj.hasOwnProperty('prop') && numObj.prop === 'data' && data === 'data';
    } finally {
        delete Number.prototype.prop;
    }
});
runTestCase(testcase);