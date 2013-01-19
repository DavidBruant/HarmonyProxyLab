wrapTestObject(function testcase() {
    var data = 'data';
    var proto = wrapTestObject({
            set: wrapTestObject(function (value) {
                data = value;
            })
        });
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: child }));
    var hasProperty = newObj.hasOwnProperty('prop');
    newObj.prop = 'overrideData';
    return hasProperty && data === 'overrideData';
});
runTestCase(testcase);