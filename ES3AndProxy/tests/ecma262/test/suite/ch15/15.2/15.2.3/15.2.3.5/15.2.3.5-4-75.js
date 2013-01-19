wrapTestObject(function testcase() {
    var accessed = false;
    var descObj = wrapTestObject({ enumerable: false });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    for (var property in newObj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return !accessed && newObj.hasOwnProperty('prop');
});
runTestCase(testcase);