wrapTestObject(function testcase() {
    var fun = wrapTestObject(function () {
            return 10;
        });
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'set', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var descObj = wrapTestObject(new Con());
    descObj.get = fun;
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({ prop: descObj }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.hasOwnProperty('prop') && typeof desc.set === 'undefined' && obj.prop === 10;
});
runTestCase(testcase);