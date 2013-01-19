wrapTestObject(function testcase() {
    var boolObj = wrapTestObject(new Boolean(true));
    var data = 'data';
    boolObj.set = wrapTestObject(function (value) {
        data = value;
    });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: boolObj }));
    var hasProperty = newObj.hasOwnProperty('prop');
    newObj.prop = 'overrideData';
    return hasProperty && data === 'overrideData';
});
runTestCase(testcase);