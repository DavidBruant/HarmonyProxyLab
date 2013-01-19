var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, '123\u03b1\u03b2\u03c0cd', wrapTestObject({}));
        return obj.hasOwnProperty('123\u03b1\u03b2\u03c0cd');
    });
runTestCase(testcase);