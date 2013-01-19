var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'property': 'ownDataProperty' });
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        try {
            desc.value = 'overwriteDataProperty';
            return desc.value === 'overwriteDataProperty';
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);