var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var descObj = wrapTestObject(new Boolean(false));
        descObj.value = 'Boolean';
        Object.defineProperties(obj, wrapTestObject({ property: descObj }));
        return obj.property === 'Boolean';
    });
runTestCase(testcase);