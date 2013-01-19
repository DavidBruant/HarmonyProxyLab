var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, wrapTestObject(new String('Hello')), wrapTestObject({}));
        return obj.hasOwnProperty('Hello');
    });
runTestCase(testcase);