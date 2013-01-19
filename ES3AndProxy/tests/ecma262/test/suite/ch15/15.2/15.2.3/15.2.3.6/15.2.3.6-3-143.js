var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var numObj = wrapTestObject(new Number(-2));
        numObj.value = 'Number';
        Object.defineProperty(obj, 'property', numObj);
        return obj.property === 'Number';
    });
runTestCase(testcase);