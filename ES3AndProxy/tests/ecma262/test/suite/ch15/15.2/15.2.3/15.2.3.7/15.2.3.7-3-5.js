var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var props = wrapTestObject({});
        Object.defineProperty(props, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject({});
            }),
            enumerable: false
        }));
        Object.defineProperties(obj, props);
        return !obj.hasOwnProperty('prop');
    });
runTestCase(testcase);