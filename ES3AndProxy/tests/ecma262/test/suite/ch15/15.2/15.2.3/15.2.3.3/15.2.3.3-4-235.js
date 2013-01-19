var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'property': 'ownDataProperty' });
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        return desc.configurable === true;
    });
runTestCase(testcase);