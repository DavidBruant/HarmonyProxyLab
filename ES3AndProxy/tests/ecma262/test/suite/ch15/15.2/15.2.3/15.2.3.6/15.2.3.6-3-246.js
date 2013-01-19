var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({});
        var data = 'data';
        Object.defineProperty(proto, 'set', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject(function (value) {
                    data = value;
                });
            })
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(child, 'set', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        Object.defineProperty(obj, 'property', child);
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && typeof obj.property === 'undefined' && data === 'data';
    });
runTestCase(testcase);