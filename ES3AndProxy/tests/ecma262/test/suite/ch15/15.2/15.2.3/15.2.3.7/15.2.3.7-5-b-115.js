var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({ value: 'inheritedDataProperty' });
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var descObj = wrapTestObject(new Con());
        Object.defineProperties(obj, wrapTestObject({ property: descObj }));
        return obj.property === 'inheritedDataProperty';
    });
runTestCase(testcase);