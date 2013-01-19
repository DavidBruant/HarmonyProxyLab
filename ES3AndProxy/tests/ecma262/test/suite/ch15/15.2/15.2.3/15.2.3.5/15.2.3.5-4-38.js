var testcase = wrapTestObject(function testcase() {
        var argObj = wrapTestObject(function () {
                return arguments;
            })();
        argObj.prop = wrapTestObject({
            value: 12,
            enumerable: true
        });
        var newObj = Object.create(wrapTestObject({}), argObj);
        return newObj.hasOwnProperty('prop');
    });
runTestCase(testcase);