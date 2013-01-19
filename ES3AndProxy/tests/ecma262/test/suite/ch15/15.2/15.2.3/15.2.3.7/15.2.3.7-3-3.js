wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'prop', wrapTestObject({
        value: wrapTestObject({}),
        enumerable: true
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var child = wrapTestObject(new Con());
    Object.defineProperties(obj, child);
    return !obj.hasOwnProperty('prop');
});
runTestCase(testcase);