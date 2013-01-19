var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var data = 'data';
        arrObj.set = wrapTestObject(function (value) {
            data = value;
        });
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: arrObj }));
        var hasProperty = newObj.hasOwnProperty('prop');
        newObj.prop = 'overrideData';
        return hasProperty && data === 'overrideData';
    });
runTestCase(testcase);