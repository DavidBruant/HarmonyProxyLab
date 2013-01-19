wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    proto.prop = wrapTestObject({ value: 'abc' });
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    child.prop = wrapTestObject({ value: 'bbq' });
    var newObj = Object.create(wrapTestObject({}), child);
    return newObj.hasOwnProperty('prop') && newObj.prop === 'bbq';
});
runTestCase(testcase);