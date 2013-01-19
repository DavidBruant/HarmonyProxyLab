var testcase = wrapTestObject(function testcase() {
        var dateObj = wrapTestObject(new Date());
        var data = 'data';
        dateObj.set = wrapTestObject(function (value) {
            data = value;
        });
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: dateObj }));
        var hasProperty = newObj.hasOwnProperty('prop');
        newObj.prop = 'overrideData';
        return hasProperty && data === 'overrideData';
    });
runTestCase(testcase);