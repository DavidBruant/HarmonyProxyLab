wrapTestObject(function testcase() {
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
        return !obj.hasOwnProperty('prop') && obj.prop === data;
    } finally {
        delete Function.prototype.prop;
    }
});
runTestCase(testcase);