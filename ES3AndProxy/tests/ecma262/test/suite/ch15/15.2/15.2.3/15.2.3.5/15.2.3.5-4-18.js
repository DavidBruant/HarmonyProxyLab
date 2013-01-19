wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    proto.prop = wrapTestObject({});
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    var newObj = Object.create(wrapTestObject({}), child);
    return !newObj.hasOwnProperty('prop');
});
runTestCase(testcase);