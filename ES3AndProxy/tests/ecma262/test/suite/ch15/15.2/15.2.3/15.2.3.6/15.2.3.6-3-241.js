var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var data = 'data';
        var attributes = wrapTestObject({});
        Object.defineProperty(attributes, 'set', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject(function (value) {
                    data = value;
                });
            })
        }));
        Object.defineProperty(obj, 'property', attributes);
        obj.property = 'ownAccessorProperty';
        return obj.hasOwnProperty('property') && data === 'ownAccessorProperty';
    });
runTestCase(testcase);