var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var props = wrapTestObject({});
        Object.defineProperty(props, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject({
                    set: wrapTestObject(function () {
                    })
                });
            }),
            enumerable: true
        }));
        Object.defineProperties(obj, props);
        return obj.hasOwnProperty('prop') && typeof obj.prop === 'undefined';
    });
runTestCase(testcase);