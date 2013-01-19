wrapTestObject(function testcase() {
    var foo = wrapTestObject(function () {
        });
    try {
        Object.defineProperty(Function.prototype, 'prop', wrapTestObject({
            value: 1001,
            writable: false,
            enumerable: false,
            configurable: true
        }));
        var obj = foo.bind(wrapTestObject({}));
        obj.prop = 1002;
        return !obj.hasOwnProperty('prop') && obj.prop === 1001;
    } finally {
        delete Function.prototype.prop;
    }
});
runTestCase(testcase);