var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var regObj = wrapTestObject(new RegExp());
        regObj.value = 'RegExp';
        Object.defineProperty(obj, 'property', regObj);
        return obj.property === 'RegExp';
    });
runTestCase(testcase);