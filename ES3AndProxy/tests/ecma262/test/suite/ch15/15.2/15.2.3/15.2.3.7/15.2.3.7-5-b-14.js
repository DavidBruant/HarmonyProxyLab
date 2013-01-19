var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        var proto = wrapTestObject({ enumerable: true });
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var descObj = wrapTestObject(new Con());
        Object.defineProperty(descObj, 'enumerable', wrapTestObject({
            get: wrapTestObject(function () {
                return false;
            })
        }));
        Object.defineProperties(obj, wrapTestObject({ prop: descObj }));
        for (var property in obj) {
            if (property === 'prop') {
                accessed = true;
            }
        }
        return !accessed;
    });
runTestCase(testcase);