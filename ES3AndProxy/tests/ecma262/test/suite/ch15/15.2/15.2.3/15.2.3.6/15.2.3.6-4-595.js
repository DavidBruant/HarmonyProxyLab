var testcase = wrapTestObject(function testcase() {
        var foo = wrapTestObject(function () {
            });
        var data = 'data';
        try {
            Object.defineProperty(Function.prototype, 'prop', wrapTestObject({
                get: wrapTestObject(function () {
                    return data;
                }),
                set: wrapTestObject(function (value) {
                    data = value;
                }),
                enumerable: true,
                configurable: true
            }));
            var obj = foo.bind(wrapTestObject({}));
            var verifyEnumerable = false;
            for (var p in obj) {
                if (p === 'prop') {
                    verifyEnumerable = true;
                }
            }
            return !obj.hasOwnProperty('prop') && verifyEnumerable;
        } finally {
            delete Function.prototype.prop;
        }
    });
runTestCase(testcase);