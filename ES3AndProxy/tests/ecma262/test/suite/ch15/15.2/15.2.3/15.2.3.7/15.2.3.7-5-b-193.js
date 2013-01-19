var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getter = wrapTestObject(function () {
                return 'ownDataProperty';
            });
        Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ get: getter }) }));
        return obj.property === 'ownDataProperty';
    });
runTestCase(testcase);