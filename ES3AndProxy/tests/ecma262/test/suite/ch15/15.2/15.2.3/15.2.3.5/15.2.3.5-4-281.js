var testcase = wrapTestObject(function testcase() {
        var strObj = wrapTestObject(new String());
        var data = 'data';
        strObj.set = wrapTestObject(function (value) {
            data = value;
        });
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: strObj }));
        var hasProperty = newObj.hasOwnProperty('prop');
        newObj.prop = 'overrideData';
        return hasProperty && data === 'overrideData';
    });
runTestCase(testcase);