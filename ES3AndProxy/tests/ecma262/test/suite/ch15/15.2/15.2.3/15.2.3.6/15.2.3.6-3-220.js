var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var strObj = wrapTestObject(new String());
        strObj.get = wrapTestObject(function () {
            return 'stringGetProperty';
        });
        Object.defineProperty(obj, 'property', strObj);
        return obj.property === 'stringGetProperty';
    });
runTestCase(testcase);