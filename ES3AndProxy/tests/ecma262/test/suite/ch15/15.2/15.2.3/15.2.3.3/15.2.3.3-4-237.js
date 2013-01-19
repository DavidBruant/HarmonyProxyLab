wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'property': 'ownDataProperty' });
    var desc = Object.getOwnPropertyDescriptor(obj, 'property');
    var accessed = false;
    for (var prop in desc) {
        if (prop === 'configurable') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);