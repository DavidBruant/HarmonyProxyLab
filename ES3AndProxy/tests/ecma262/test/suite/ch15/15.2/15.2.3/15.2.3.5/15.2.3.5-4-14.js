var testcase = wrapTestObject(function testcase() {
        var props = wrapTestObject(new Error('test'));
        var result = false;
        Object.getOwnPropertyNames(props).forEach(wrapTestObject(function (name) {
            props[name] = wrapTestObject({
                value: 11,
                configurable: true
            });
        }));
        Object.defineProperty(props, 'prop15_2_3_5_4_14', wrapTestObject({
            get: wrapTestObject(function () {
                result = this instanceof Error;
                return wrapTestObject({});
            }),
            enumerable: true
        }));
        var newObj = Object.create(wrapTestObject({}), props);
        return result && newObj.hasOwnProperty('prop15_2_3_5_4_14');
    });
runTestCase(testcase);