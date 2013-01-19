var testcase = wrapTestObject(function testcase() {
        var arg;
        wrapTestObject(function fun() {
            arg = arguments;
        })(0, 1, 2);
        delete arg[0];
        Object.defineProperties(arg, wrapTestObject({
            '0': wrapTestObject({
                value: 10,
                writable: false,
                enumerable: false,
                configurable: false
            })
        }));
        return dataPropertyAttributesAreCorrect(arg, '0', 10, false, false, false);
    });
runTestCase(testcase);