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
        obj.prop = 'overrideData';
        return !obj.hasOwnProperty('prop') && obj.prop === 'overrideData';
    } finally {
        delete Function.prototype.prop;
    }
});
runTestCase(testcase);