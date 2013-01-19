var testcase = wrapTestObject(function testcase() {
        var props = wrapTestObject(new Boolean(true));
        var result = false;
        Object.defineProperty(props, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                result = this instanceof Boolean;
                return wrapTestObject({});
            }),
            enumerable: true
        }));
        Object.create(wrapTestObject({}), props);
        return result;
    });
runTestCase(testcase);