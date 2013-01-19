wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'property': 'ownDataProperty' });
    var desc = Object.getOwnPropertyDescriptor(obj, 'property');
    var propDefined = 'configurable' in desc;
    try {
        delete desc.configurable;
        var propDeleted = 'configurable' in desc;
        return propDefined && !propDeleted;
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);