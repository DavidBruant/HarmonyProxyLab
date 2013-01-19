wrapTestObject(function testcase() {
    var proto = wrapTestObject({ value: 'inheritedDataProperty' });
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var descObj = wrapTestObject(new ConstructFun());
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    return newObj.prop === 'inheritedDataProperty';
});
runTestCase(testcase);