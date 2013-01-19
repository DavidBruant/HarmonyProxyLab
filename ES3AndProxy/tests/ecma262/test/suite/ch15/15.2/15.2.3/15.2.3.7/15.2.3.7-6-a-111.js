wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function get_func() {
        return 20;
    });
    wrapTestObject(function set_func() {
    });
    var properties = wrapTestObject({
            a: wrapTestObject({
                value: 100,
                enumerable: true,
                writable: true,
                configurable: true
            }),
            b: wrapTestObject({
                get: get_func,
                set: set_func,
                enumerable: true,
                configurable: true
            }),
            c: wrapTestObject({
                value: 200,
                enumerable: true,
                writable: true,
                configurable: true
            })
        });
    Object.defineProperties(obj, properties);
    return obj['a'] === 100 && obj['b'] === 20 && obj['c'] === 200;
});
runTestCase(testcase);