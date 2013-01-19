var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'property': 'ownDataProperty' });
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        try {
            desc.writable = 'overwriteDataProperty';
            return desc.writable === 'overwriteDataProperty';
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);