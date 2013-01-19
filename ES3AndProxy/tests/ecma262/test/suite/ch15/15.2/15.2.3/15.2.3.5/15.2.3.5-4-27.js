var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject({});
            }),
            enumerable: true
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(child, 'prop', wrapTestObject({
            set: wrapTestObject(function () {
            }),
            enumerable: true
        }));
        try {
            Object.create(wrapTestObject({}), child);
            return false;
        } catch (ex) {
            return ex instanceof TypeError;
        }
    });
runTestCase(testcase);