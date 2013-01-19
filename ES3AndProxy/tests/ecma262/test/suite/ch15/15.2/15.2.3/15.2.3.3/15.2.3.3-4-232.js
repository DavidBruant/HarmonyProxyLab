var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'property': 'ownDataProperty' });
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        try {
            desc.enumerable = 'overwriteDataProperty';
            return desc.enumerable === 'overwriteDataProperty';
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);