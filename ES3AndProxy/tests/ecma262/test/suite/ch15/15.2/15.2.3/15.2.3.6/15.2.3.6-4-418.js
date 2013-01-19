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
        obj.prop = 1002;
        return obj.hasOwnProperty('prop') && obj.prop === 1002;
    } finally {
        delete Function.prototype.prop;
    }
});
runTestCase(testcase);