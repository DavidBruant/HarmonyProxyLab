var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var result = false;
        try {
            Object.defineProperty(JSON, 'prop', wrapTestObject({
                get: wrapTestObject(function () {
                    result = this === JSON;
                    return wrapTestObject({});
                }),
                enumerable: true,
                configurable: true
            }));
            Object.defineProperties(obj, JSON);
            return result;
        } finally {
            delete JSON.prop;
        }
    });
runTestCase(testcase);