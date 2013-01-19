var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var descObj = wrapTestObject(new RegExp());
        descObj.value = 'RegExp';
        Object.defineProperties(obj, wrapTestObject({ property: descObj }));
        return obj.property === 'RegExp';
    });
runTestCase(testcase);