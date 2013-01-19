wrapTestObject(function testcase() {
    var data1 = 'data';
    var data2 = 'data';
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'set', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject(function (value) {
                data2 = value;
            });
        })
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    Object.defineProperty(child, 'set', wrapTestObject({
        value: wrapTestObject(function (value) {
            data1 = value;
        })
    }));
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: child }));
    var hasProperty = newObj.hasOwnProperty('prop');
    newObj.prop = 'overrideData';
    return hasProperty && data1 === 'overrideData' && data2 === 'data';
});
runTestCase(testcase);