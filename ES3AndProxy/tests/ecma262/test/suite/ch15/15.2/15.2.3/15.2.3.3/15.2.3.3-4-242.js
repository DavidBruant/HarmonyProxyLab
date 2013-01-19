var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var fun = wrapTestObject(function () {
                return 'ownDataProperty';
            });
        Object.defineProperty(obj, 'property', wrapTestObject({
            get: fun,
            configurable: true
        }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        var propDefined = 'get' in desc;
        try {
            delete desc.get;
            var propDeleted = 'get' in desc;
            return propDefined && !propDeleted;
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);