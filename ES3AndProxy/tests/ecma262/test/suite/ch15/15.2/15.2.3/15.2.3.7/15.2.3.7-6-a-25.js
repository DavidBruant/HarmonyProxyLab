var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.preventExtensions(obj);
        try {
            Object.defineProperties(obj, wrapTestObject({
                prop: wrapTestObject({
                    value: 12,
                    configurable: true
                })
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError && !obj.hasOwnProperty('prop');
        }
    });
runTestCase(testcase);