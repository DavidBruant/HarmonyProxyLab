var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'foo', wrapTestObject({
            value: 9,
            writable: false,
            configurable: false
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var child = wrapTestObject(new Con());
        Object.defineProperty(child, 'foo', wrapTestObject({
            value: 12,
            writable: true,
            configurable: false
        }));
        Object.preventExtensions(child);
        return !Object.isFrozen(child);
    });
runTestCase(testcase);