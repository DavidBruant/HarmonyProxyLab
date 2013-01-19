wrapTestObject(function testcase() {
    var data = 'data';
    try {
        Object.defineProperty(Date.prototype, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return data;
            }),
            set: wrapTestObject(function (value) {
                data = value;
            }),
            enumerable: true,
            configurable: true
        }));
        var dateObj = wrapTestObject(new Date());
        dateObj.prop = 'myOwnProperty';
        return !dateObj.hasOwnProperty('prop') && dateObj.prop === 'myOwnProperty' && data === 'myOwnProperty';
    } finally {
        delete Date.prototype.prop;
    }
});
runTestCase(testcase);