wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'configurable', wrapTestObject({
        get: wrapTestObject(function () {
            return true;
        })
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var descObj = wrapTestObject(new Con());
    Object.defineProperty(descObj, 'configurable', wrapTestObject({ value: false }));
    Object.defineProperties(obj, wrapTestObject({ prop: descObj }));
    var result1 = obj.hasOwnProperty('prop');
    delete obj.prop;
    var result2 = obj.hasOwnProperty('prop');
    return result1 === true && result2 === true;
});
runTestCase(testcase);