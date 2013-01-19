var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({ value: 'inheritedDataProperty' });
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var descObj = wrapTestObject(new Con());
        descObj.value = 'ownDataProperty';
        Object.defineProperties(obj, wrapTestObject({ property: descObj }));
        return obj.property === 'ownDataProperty';
    });
runTestCase(testcase);