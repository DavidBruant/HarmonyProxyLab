var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ value: 'ownDataProperty' }) }));
        return obj.property === 'ownDataProperty';
    });
runTestCase(testcase);