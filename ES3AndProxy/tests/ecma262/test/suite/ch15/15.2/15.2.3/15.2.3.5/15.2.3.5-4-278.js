wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'set', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: child }));
    var desc = Object.getOwnPropertyDescriptor(newObj, 'prop');
    return newObj.hasOwnProperty('prop') && typeof desc.set === 'undefined';
});
runTestCase(testcase);