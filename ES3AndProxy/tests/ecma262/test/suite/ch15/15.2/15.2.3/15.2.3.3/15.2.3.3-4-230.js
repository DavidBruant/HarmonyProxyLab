var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'property': 'ownDataProperty' });
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        var propDefined = 'writable' in desc;
        try {
            delete desc.writable;
            var propDeleted = 'writable' in desc;
            return propDefined && !propDeleted;
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);