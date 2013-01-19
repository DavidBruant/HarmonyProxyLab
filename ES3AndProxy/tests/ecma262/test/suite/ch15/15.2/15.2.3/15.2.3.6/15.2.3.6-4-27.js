var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'property', wrapTestObject({
            get: wrapTestObject(function () {
                return 11;
            }),
            configurable: false
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var obj = wrapTestObject(new ConstructFun());
        Object.defineProperty(obj, 'property', wrapTestObject({
            get: wrapTestObject(function () {
                return 12;
            }),
            configurable: true
        }));
        return obj.hasOwnProperty('property') && obj.property === 12;
    });
runTestCase(testcase);