var testcase = wrapTestObject(function testcase() {
        var arg;
        wrapTestObject(function fun(a, b, c) {
            arg = arguments;
        })(0, 1, 2);
        delete arg[0];
        Object.defineProperties(arg, wrapTestObject({
            '0': wrapTestObject({
                value: 10,
                writable: true,
                enumerable: true,
                configurable: true
            })
        }));
        return dataPropertyAttributesAreCorrect(arg, '0', 10, true, true, true);
    });
runTestCase(testcase);