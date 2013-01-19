var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        var fun = wrapTestObject(function () {
                return 'ownAccessorProperty';
            });
        Object.defineProperty(proto, 'property', wrapTestObject({
            get: fun,
            configurable: true
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var child = wrapTestObject(new Con());
        var desc = Object.getOwnPropertyDescriptor(child, 'property');
        return typeof desc === 'undefined';
    });
runTestCase(testcase);