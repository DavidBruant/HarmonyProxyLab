var testcase = wrapTestObject(function testcase() {
        var argObj = wrapTestObject(function () {
                return arguments;
            })();
        argObj.configurable = true;
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: argObj }));
        var result1 = newObj.hasOwnProperty('prop');
        delete newObj.prop;
        var result2 = newObj.hasOwnProperty('prop');
        return result1 === true && result2 === false;
    });
runTestCase(testcase);