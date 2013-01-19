var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'prop', wrapTestObject({
            value: 11,
            configurable: true
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var obj = wrapTestObject(new Con());
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return 12;
            }),
            configurable: false
        }));
        try {
            Object.defineProperties(obj, wrapTestObject({
                prop: wrapTestObject({
                    value: 13,
                    configurable: true
                })
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError && obj.prop === 12;
        }
    });
runTestCase(testcase);