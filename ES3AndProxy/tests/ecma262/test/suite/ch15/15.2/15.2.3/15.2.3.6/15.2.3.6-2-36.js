var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'null', wrapTestObject({}));
        return obj.hasOwnProperty('null');
    });
runTestCase(testcase);