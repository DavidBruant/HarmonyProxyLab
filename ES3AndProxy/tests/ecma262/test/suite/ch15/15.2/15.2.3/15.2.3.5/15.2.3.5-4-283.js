var testcase = wrapTestObject(function testcase() {
        var numObj = wrapTestObject(new Number(5));
        var data = 'data';
        numObj.set = wrapTestObject(function (value) {
            data = value;
        });
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: numObj }));
        var hasProperty = newObj.hasOwnProperty('prop');
        newObj.prop = 'overrideData';
        return hasProperty && data === 'overrideData';
    });
runTestCase(testcase);