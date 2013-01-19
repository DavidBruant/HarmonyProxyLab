var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ property: 120 });
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'value', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(obj, 'property', child);
        return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
    });
runTestCase(testcase);