wrapTestObject(function testcase() {
    var regObj = wrapTestObject(new RegExp());
    var data = 'data';
    regObj.set = wrapTestObject(function (value) {
        data = value;
    });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: regObj }));
    var hasProperty = newObj.hasOwnProperty('prop');
    newObj.prop = 'overrideData';
    return hasProperty && data === 'overrideData';
});
runTestCase(testcase);