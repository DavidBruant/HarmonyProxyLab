var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var str = wrapTestObject(new String('abc'));
        str.value = 'String';
        Object.defineProperties(obj, wrapTestObject({ property: str }));
        return obj.property === 'String';
    });
runTestCase(testcase);