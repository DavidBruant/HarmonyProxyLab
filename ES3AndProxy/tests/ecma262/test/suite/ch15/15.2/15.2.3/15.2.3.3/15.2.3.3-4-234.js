var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'property': 'ownDataProperty' });
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        var propDefined = 'enumerable' in desc;
        try {
            delete desc.enumerable;
            var propDeleted = 'enumerable' in desc;
            return propDefined && !propDeleted;
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);