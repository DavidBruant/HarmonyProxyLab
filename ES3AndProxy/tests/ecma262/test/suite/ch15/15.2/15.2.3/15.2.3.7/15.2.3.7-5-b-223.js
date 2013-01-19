var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getter = wrapTestObject(function () {
                return 100;
            });
        Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ get: getter }) }));
        return obj.property === 100;
    });
runTestCase(testcase);