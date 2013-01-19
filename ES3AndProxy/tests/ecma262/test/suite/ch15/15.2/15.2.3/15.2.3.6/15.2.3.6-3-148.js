var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var errObj = wrapTestObject(new Error());
        errObj.value = 'Error';
        Object.defineProperty(obj, 'property', errObj);
        return obj.property === 'Error';
    });
runTestCase(testcase);