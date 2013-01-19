wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'prop', wrapTestObject({
        value: wrapTestObject({ value: 9 }),
        enumerable: true
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var child = wrapTestObject(new Con());
    Object.defineProperty(child, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject({ value: 12 });
        }),
        enumerable: true
    }));
    Object.defineProperties(obj, child);
    return obj.hasOwnProperty('prop') && obj.prop === 12;
});
runTestCase(testcase);