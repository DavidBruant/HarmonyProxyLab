var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'foo', wrapTestObject({
            get: wrapTestObject(function () {
                return 0;
            }),
            configurable: true
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(child, 'foo', wrapTestObject({
            get: wrapTestObject(function () {
                return 10;
            }),
            configurable: true
        }));
        var preCheck = Object.isExtensible(child);
        Object.seal(child);
        delete child.foo;
        return preCheck && child.foo === 10;
    });
runTestCase(testcase);