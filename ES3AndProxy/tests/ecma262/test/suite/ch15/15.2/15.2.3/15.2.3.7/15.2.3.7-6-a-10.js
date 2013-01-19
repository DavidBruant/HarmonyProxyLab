var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return 11;
            }),
            set: wrapTestObject(function () {
            }),
            configurable: true
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var obj = wrapTestObject(new Con());
        Object.defineProperty(obj, 'prop', wrapTestObject({
            set: wrapTestObject(function () {
            }),
            configurable: false
        }));
        try {
            Object.defineProperties(obj, wrapTestObject({
                prop: wrapTestObject({
                    value: 12,
                    configurable: true
                })
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);