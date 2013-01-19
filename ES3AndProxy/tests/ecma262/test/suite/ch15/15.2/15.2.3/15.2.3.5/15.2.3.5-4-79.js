wrapTestObject(function testcase() {
    var accessed = false;
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ enumerable: NaN }) }));
    for (var property in newObj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return !accessed && newObj.hasOwnProperty('prop');
});
runTestCase(testcase);