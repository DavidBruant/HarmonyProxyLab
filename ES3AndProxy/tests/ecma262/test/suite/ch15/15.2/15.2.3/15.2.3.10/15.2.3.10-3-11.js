var testcase = wrapTestObject(function testcase() {
        var argObj;
        wrapTestObject(function () {
            argObj = arguments;
        })();
        var preCheck = Object.isExtensible(argObj);
        Object.preventExtensions(argObj);
        argObj[0] = 12;
        return preCheck && !argObj.hasOwnProperty('0');
    });
runTestCase(testcase);