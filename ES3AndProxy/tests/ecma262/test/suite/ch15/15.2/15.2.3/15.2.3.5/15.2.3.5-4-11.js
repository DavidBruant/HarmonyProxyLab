var testcase = wrapTestObject(function testcase() {
        var props = wrapTestObject(new Date());
        var result = false;
        Object.defineProperty(props, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                result = this instanceof Date;
                return wrapTestObject({});
            }),
            enumerable: true
        }));
        var newObj = Object.create(wrapTestObject({}), props);
        return result && newObj.hasOwnProperty('prop');
    });
runTestCase(testcase);