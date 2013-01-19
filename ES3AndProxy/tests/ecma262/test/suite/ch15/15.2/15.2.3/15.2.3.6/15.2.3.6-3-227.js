var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var errObj = wrapTestObject(new Error());
        errObj.get = wrapTestObject(function () {
            return 'errorGetProperty';
        });
        Object.defineProperty(obj, 'property', errObj);
        return obj.property === 'errorGetProperty';
    });
runTestCase(testcase);