var testcase = wrapTestObject(function testcase() {
        var props = wrapTestObject({});
        Object.defineProperty(props, 'prop', wrapTestObject({
            set: wrapTestObject(function () {
            }),
            enumerable: true
        }));
        try {
            Object.create(wrapTestObject({}), props);
            return false;
        } catch (ex) {
            return ex instanceof TypeError;
        }
    });
runTestCase(testcase);