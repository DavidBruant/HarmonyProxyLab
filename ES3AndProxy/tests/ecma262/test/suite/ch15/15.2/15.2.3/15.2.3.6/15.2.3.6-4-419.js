wrapTestObject(function testcase() {
    var foo = wrapTestObject(function () {
        });
    try {
        Object.defineProperty(Function.prototype, 'prop', wrapTestObject({
            value: 1001,
            writable: true,
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