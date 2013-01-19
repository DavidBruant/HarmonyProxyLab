var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var numObj = wrapTestObject(new Number(-2));
        numObj.get = wrapTestObject(function () {
            return 'numberGetProperty';
        });
        Object.defineProperty(obj, 'property', numObj);
        return obj.property === 'numberGetProperty';
    });
runTestCase(testcase);