wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'prop', wrapTestObject({
        value: 11,
        configurable: false
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var obj = wrapTestObject(new Con());
    Object.defineProperties(obj, wrapTestObject({
        prop: wrapTestObject({
            value: 12,
            configurable: true
        })
    }));
    return dataPropertyAttributesAreCorrect(obj, 'prop', 12, false, false, true);
});
runTestCase(testcase);