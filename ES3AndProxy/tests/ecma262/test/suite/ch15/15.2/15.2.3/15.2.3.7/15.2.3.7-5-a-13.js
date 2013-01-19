var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var props = wrapTestObject(new Date());
        Object.defineProperty(props, 'prop', wrapTestObject({
            value: wrapTestObject({ value: 13 }),
            enumerable: true
        }));
        Object.defineProperties(obj, props);
        return obj.hasOwnProperty('prop') && obj.prop === 13;
    });
runTestCase(testcase);