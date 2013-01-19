var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        proto.prop = wrapTestObject({ value: 12 });
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(child, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject({ value: 9 });
            }),
            enumerable: true
        }));
        var newObj = Object.create(wrapTestObject({}), child);
        return newObj.hasOwnProperty('prop') && newObj.prop === 9;
    });
runTestCase(testcase);