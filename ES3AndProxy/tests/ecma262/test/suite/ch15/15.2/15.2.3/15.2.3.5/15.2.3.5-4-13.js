var testcase = wrapTestObject(function testcase() {
        var result = false;
        Object.defineProperty(JSON, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                result = this === JSON;
                return wrapTestObject({});
            }),
            enumerable: true,
            configurable: true
        }));
        try {
            var newObj = Object.create(wrapTestObject({}), JSON);
            return result && newObj.hasOwnProperty('prop');
        } finally {
            delete JSON.prop;
        }
    });
runTestCase(testcase);