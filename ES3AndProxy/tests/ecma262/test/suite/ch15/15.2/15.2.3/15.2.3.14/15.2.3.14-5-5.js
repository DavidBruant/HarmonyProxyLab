var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'inheritedProp', wrapTestObject({
            value: 1003,
            enumerable: true,
            configurable: true
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var obj = wrapTestObject(new Con());
        obj.prop = 1004;
        var arr = Object.keys(obj);
        for (var p in arr) {
            if (arr[p] === 'inheritedProp') {
                return false;
            }
        }
        return true;
    });
runTestCase(testcase);