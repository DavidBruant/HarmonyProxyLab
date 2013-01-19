wrapTestObject(function testcase() {
    var data = 'data';
    try {
        Object.defineProperty(Boolean.prototype, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return data;
            }),
            set: wrapTestObject(function (value) {
                data = value;
            }),
            enumerable: true,
            configurable: true
        }));
        var boolObj = wrapTestObject(new Boolean());
        var verifyEnumerable = false;
        for (var p in boolObj) {
            if (p === 'prop') {
                verifyEnumerable = true;
            }
        }
        return !boolObj.hasOwnProperty('prop') && verifyEnumerable;
    } finally {
        delete Boolean.prototype.prop;
    }
});
runTestCase(testcase);