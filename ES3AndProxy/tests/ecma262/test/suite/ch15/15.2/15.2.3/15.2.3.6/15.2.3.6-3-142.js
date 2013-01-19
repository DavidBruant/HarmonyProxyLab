var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var boolObj = wrapTestObject(new Boolean(true));
        boolObj.value = 'Boolean';
        Object.defineProperty(obj, 'property', boolObj);
        return obj.property === 'Boolean';
    });
runTestCase(testcase);