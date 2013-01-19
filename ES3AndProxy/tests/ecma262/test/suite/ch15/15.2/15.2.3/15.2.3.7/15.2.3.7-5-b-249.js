var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        var fun = wrapTestObject(function () {
                return arguments;
            });
        var arg = fun();
        var setFun = wrapTestObject(function (value) {
                data = value;
            });
        arg.prop = wrapTestObject({ set: setFun });
        var obj = wrapTestObject({});
        Object.defineProperties(obj, arg);
        obj.prop = 'argData';
        return obj.hasOwnProperty('prop') && data === 'argData';
    });
runTestCase(testcase);