var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'property': 'ownDataProperty' });
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        var accessed = false;
        for (var props in desc) {
            if (props === 'enumerable') {
                accessed = true;
            }
        }
        return accessed;
    });
runTestCase(testcase);