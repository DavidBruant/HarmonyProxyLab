var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getter = wrapTestObject(function () {
                return 'inheritedDataProperty';
            });
        var proto = wrapTestObject({ get: getter });
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var descObj = wrapTestObject(new Con());
        descObj.get = wrapTestObject(function () {
            return 'ownDataProperty';
        });
        Object.defineProperties(obj, wrapTestObject({ property: descObj }));
        return obj.property === 'ownDataProperty';
    });
runTestCase(testcase);