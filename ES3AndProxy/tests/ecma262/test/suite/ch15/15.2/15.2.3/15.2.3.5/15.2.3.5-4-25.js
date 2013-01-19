wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject({ value: 9 });
        }),
        enumerable: true
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    Object.defineProperty(child, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject({ value: 12 });
        }),
        enumerable: true
    }));
    var newObj = Object.create(wrapTestObject({}), child);
    return newObj.hasOwnProperty('prop') && newObj.prop === 12;
});
runTestCase(testcase);