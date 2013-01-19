var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({ value: 'inheritedDataProperty' });
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var descObj = wrapTestObject(new ConstructFun());
        descObj.value = 'ownDataProperty';
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
        return newObj.prop === 'ownDataProperty';
    });
runTestCase(testcase);