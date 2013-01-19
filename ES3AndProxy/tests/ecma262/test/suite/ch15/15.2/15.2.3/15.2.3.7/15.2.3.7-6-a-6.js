var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return 11;
            }),
            configurable: false
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var obj = wrapTestObject(new Con());
        Object.defineProperties(obj, wrapTestObject({
            prop: wrapTestObject({
                get: wrapTestObject(function () {
                    return 12;
                }),
                configurable: true
            })
        }));
        return obj.hasOwnProperty('prop') && obj.prop === 12;
    });
runTestCase(testcase);