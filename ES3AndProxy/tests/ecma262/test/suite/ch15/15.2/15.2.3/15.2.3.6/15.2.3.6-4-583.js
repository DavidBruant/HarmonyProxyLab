var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        try {
            Object.defineProperty(Error.prototype, 'prop', wrapTestObject({
                get: wrapTestObject(function () {
                    return data;
                }),
                set: wrapTestObject(function (value) {
                    data = value;
                }),
                enumerable: true,
                configurable: true
            }));
            var errObj = wrapTestObject(new Error());
            return !errObj.hasOwnProperty('prop') && errObj.prop === 'data';
        } finally {
            delete Error.prototype.prop;
        }
    });
runTestCase(testcase);