wrapTestObject(function testcase() {
    var data = 'data';
    try {
        Object.defineProperty(Function.prototype, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return data;
            }),
            enumerable: false,
            configurable: true
        }));
        var funObj = wrapTestObject(function () {
            });
        var verifyEnumerable = false;
        for (var p in funObj) {
            if (p === 'prop') {
                verifyEnumerable = true;
            }
        }
        return !funObj.hasOwnProperty('prop') && !verifyEnumerable;
    } finally {
        delete Function.prototype.prop;
    }
});
runTestCase(testcase);