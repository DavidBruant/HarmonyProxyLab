var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var func = wrapTestObject(function (a, b) {
                arguments.value = 'arguments';
                Object.defineProperties(obj, wrapTestObject({ property: arguments }));
                return obj.property === 'arguments';
            });
        return func();
    });
runTestCase(testcase);