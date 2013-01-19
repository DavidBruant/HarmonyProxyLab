var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var props = wrapTestObject(function () {
            });
        Object.defineProperty(props, 'prop', wrapTestObject({
            value: wrapTestObject({ value: 7 }),
            enumerable: true
        }));
        Object.defineProperties(obj, props);
        return obj.hasOwnProperty('prop') && obj.prop === 7;
    });
runTestCase(testcase);