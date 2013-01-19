var testcase = wrapTestObject(function testcase() {
        try {
            var newObj = Object.create(wrapTestObject({}), wrapTestObject({
                    prop: wrapTestObject({
                        writable: true,
                        configurable: true,
                        enumerable: true
                    })
                }));
            return newObj.hasOwnProperty('prop') && newObj.prop === undefined;
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);