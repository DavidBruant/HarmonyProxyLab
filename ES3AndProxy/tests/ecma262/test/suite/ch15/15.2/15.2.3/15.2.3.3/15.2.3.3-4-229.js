wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'property': 'ownDataProperty' });
    var desc = Object.getOwnPropertyDescriptor(obj, 'property');
    var accessed = false;
    for (var props in desc) {
        if (props === 'writable') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);