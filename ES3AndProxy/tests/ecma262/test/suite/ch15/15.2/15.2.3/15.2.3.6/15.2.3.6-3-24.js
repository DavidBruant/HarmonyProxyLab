var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'enumerable', wrapTestObject({ value: false }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(child, 'enumerable', wrapTestObject({ value: true }));
        Object.defineProperty(obj, 'property', child);
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return accessed;
    });
runTestCase(testcase);