var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var props = wrapTestObject(new Number(-9));
        Object.defineProperty(props, 'prop', wrapTestObject({
            value: wrapTestObject({ value: 12 }),
            enumerable: true
        }));
        Object.defineProperties(obj, props);
        return obj.hasOwnProperty('prop') && obj.prop === 12;
    });
runTestCase(testcase);