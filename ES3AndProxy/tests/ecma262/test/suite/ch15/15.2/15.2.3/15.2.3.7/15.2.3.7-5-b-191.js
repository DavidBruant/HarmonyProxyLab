wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var getter = wrapTestObject(function () {
            return 'present';
        });
    Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ get: getter }) }));
    return obj.property === 'present';
});
runTestCase(testcase);