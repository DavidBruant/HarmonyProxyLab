wrapTestObject(function testcase() {
    var data = 'data';
    var setFun = wrapTestObject(function (value) {
            data = value;
        });
    var descObj = wrapTestObject({});
    Object.defineProperty(descObj, 'set', wrapTestObject({
        get: wrapTestObject(function () {
            return setFun;
        })
    }));
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({ prop: descObj }));
    obj.prop = 'overrideData';
    return obj.hasOwnProperty('prop') && data === 'overrideData';
});
runTestCase(testcase);