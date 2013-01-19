wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'property': 'ownDataProperty' });
    var desc = Object.getOwnPropertyDescriptor(obj, 'property');
    var propDefined = 'value' in desc;
    try {
        delete desc.value;
        var propDeleted = 'value' in desc;
        return propDefined && !propDeleted;
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);