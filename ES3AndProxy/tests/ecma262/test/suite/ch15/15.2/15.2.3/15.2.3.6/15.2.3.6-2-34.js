var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'AB\n\\cd', wrapTestObject({}));
        return obj.hasOwnProperty('AB\n\\cd');
    });
runTestCase(testcase);