var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var attr = wrapTestObject({});
        Object.defineProperty(attr, 'value', wrapTestObject({
            get: wrapTestObject(function () {
                return 'ownAccessorProperty';
            })
        }));
        Object.defineProperty(obj, 'property', attr);
        return obj.property === 'ownAccessorProperty';
    });
runTestCase(testcase);