var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var arg;
        wrapTestObject(function fun() {
            arg = arguments;
        })();
        Object.defineProperty(arg, 'prop', wrapTestObject({
            value: wrapTestObject({ value: 17 }),
            enumerable: true
        }));
        Object.defineProperties(obj, arg);
        return obj.hasOwnProperty('prop') && obj.prop === 17;
    });
runTestCase(testcase);