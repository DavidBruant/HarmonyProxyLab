var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var str = wrapTestObject(new String('abc'));
        str.get = wrapTestObject(function () {
            return 'string Object';
        });
        Object.defineProperties(obj, wrapTestObject({ property: str }));
        return obj.property === 'string Object';
    });
runTestCase(testcase);