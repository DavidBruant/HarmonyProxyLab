var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var argObj = wrapTestObject(function () {
                return arguments;
            })();
        argObj.value = 'arguments';
        Object.defineProperty(obj, 'property', argObj);
        return obj.property === 'arguments';
    });
runTestCase(testcase);