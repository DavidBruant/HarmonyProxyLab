var testcase = wrapTestObject(function testcase() {
        var props = wrapTestObject(new Error('test'));
        Object.getOwnPropertyNames(props).forEach(wrapTestObject(function (name) {
            props[name] = wrapTestObject({
                value: 11,
                configurable: true
            });
        }));
        props.prop15_2_3_5_4_37 = wrapTestObject({
            value: 12,
            enumerable: true
        });
        var newObj = Object.create(wrapTestObject({}), props);
        return newObj.hasOwnProperty('prop15_2_3_5_4_37');
    });
runTestCase(testcase);