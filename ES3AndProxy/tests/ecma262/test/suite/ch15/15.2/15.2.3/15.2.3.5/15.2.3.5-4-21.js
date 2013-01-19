var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject({});
            }),
            enumerable: true
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        var newObj = Object.create(wrapTestObject({}), child);
        return !newObj.hasOwnProperty('prop');
    });
runTestCase(testcase);