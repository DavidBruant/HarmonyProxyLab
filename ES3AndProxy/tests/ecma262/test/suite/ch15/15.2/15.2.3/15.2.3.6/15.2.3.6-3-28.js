var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        var proto = wrapTestObject({ enumerable: false });
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(child, 'enumerable', wrapTestObject({
            get: wrapTestObject(function () {
                return true;
            })
        }));
        Object.defineProperty(obj, 'property', child);
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return accessed;
    });
runTestCase(testcase);