var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'get', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject(function () {
                    return 'inheritedAccessorProperty';
                });
            })
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var descObj = wrapTestObject(new Con());
        Object.defineProperty(descObj, 'get', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        Object.defineProperties(obj, wrapTestObject({ property: descObj }));
        return typeof obj.property === 'undefined';
    });
runTestCase(testcase);