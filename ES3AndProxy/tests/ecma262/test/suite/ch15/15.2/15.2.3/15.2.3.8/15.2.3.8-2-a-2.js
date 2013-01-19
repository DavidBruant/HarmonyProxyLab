var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({ foo: 0 });
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(child, 'foo', wrapTestObject({
            value: 10,
            configurable: true
        }));
        var preCheck = Object.isExtensible(child);
        Object.seal(child);
        delete child.foo;
        return preCheck && child.foo === 10;
    });
runTestCase(testcase);