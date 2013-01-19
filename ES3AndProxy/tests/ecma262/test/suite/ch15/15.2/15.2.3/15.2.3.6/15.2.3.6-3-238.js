var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var data = 'data';
        var proto = wrapTestObject({
                set: wrapTestObject(function (value) {
                    data = value;
                })
            });
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(obj, 'property', child);
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && data === 'overrideData';
    });
runTestCase(testcase);