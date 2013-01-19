var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var result = false;
        try {
            Object.defineProperty(fnGlobalObject(), 'prop', wrapTestObject({
                get: wrapTestObject(function () {
                    result = this === fnGlobalObject();
                    return wrapTestObject({});
                }),
                enumerable: true,
                configurable: true
            }));
            Object.defineProperties(obj, fnGlobalObject());
            return result;
        } catch (e) {
            return e instanceof TypeError;
        } finally {
            delete fnGlobalObject().prop;
        }
    });
runTestCase(testcase);