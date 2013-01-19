var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var result = false;
        try {
            Object.defineProperty(Math, 'prop', wrapTestObject({
                get: wrapTestObject(function () {
                    result = this === Math;
                    return wrapTestObject({});
                }),
                enumerable: true,
                configurable: true
            }));
            Object.defineProperties(obj, Math);
            return result;
        } finally {
            delete Math.prop;
        }
    });
runTestCase(testcase);