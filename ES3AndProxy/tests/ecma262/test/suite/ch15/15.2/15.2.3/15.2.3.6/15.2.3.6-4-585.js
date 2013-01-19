var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        try {
            Object.defineProperty(RegExp.prototype, 'prop', wrapTestObject({
                get: wrapTestObject(function () {
                    return data;
                }),
                set: wrapTestObject(function (value) {
                    data = value;
                }),
                enumerable: true,
                configurable: true
            }));
            var regObj = wrapTestObject(new RegExp());
            var verifyEnumerable = false;
            for (var p in regObj) {
                if (p === 'prop') {
                    verifyEnumerable = true;
                }
            }
            return !regObj.hasOwnProperty('prop') && verifyEnumerable;
        } finally {
            delete RegExp.prototype.prop;
        }
    });
runTestCase(testcase);