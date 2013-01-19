wrapTestObject(function testcase() {
    var fun = wrapTestObject(function () {
            return 10;
        });
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'set', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject(function () {
                return arguments;
            });
        })
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var descObj = wrapTestObject(new Con());
    Object.defineProperty(descObj, 'set', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    descObj.get = fun;
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({ prop: descObj }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return obj.hasOwnProperty('prop') && typeof desc.set === 'undefined' && obj.prop === 10;
});
runTestCase(testcase);