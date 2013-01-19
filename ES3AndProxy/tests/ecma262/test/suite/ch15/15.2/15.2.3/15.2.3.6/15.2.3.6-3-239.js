var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var data1 = 'data';
        var data2 = 'data';
        var proto = wrapTestObject({
                set: wrapTestObject(function (value) {
                    data1 = value;
                })
            });
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        child.set = wrapTestObject(function (value) {
            data2 = value;
        });
        Object.defineProperty(obj, 'property', child);
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && data1 === 'data' && data2 === 'overrideData';
    });
runTestCase(testcase);