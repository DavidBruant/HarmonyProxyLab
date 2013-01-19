wrapTestObject(function testcase() {
    var funObj = wrapTestObject(function () {
        });
    var data = 'data';
    funObj.set = wrapTestObject(function (value) {
        data = value;
    });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: funObj }));
    var hasProperty = newObj.hasOwnProperty('prop');
    newObj.prop = 'overrideData';
    return hasProperty && data === 'overrideData';
});
runTestCase(testcase);