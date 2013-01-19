var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({});
        var accessed = false;
        Object.defineProperty(proto, 'enumerable', wrapTestObject({
            get: wrapTestObject(function () {
                return true;
            })
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var descObj = wrapTestObject(new Con());
        Object.defineProperties(obj, wrapTestObject({ prop: descObj }));
        for (var property in obj) {
            if (property === 'prop') {
                accessed = true;
            }
        }
        return accessed;
    });
runTestCase(testcase);