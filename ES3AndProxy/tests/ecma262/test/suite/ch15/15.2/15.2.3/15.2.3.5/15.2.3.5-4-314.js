var testcase = wrapTestObject(function testcase() {
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ foo: wrapTestObject({}) }));
        return newObj.hasOwnProperty('foo');
    });
runTestCase(testcase);