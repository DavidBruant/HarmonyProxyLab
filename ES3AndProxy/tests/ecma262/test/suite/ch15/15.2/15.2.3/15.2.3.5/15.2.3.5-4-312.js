wrapTestObject(function testcase() {
    var isEnumerable = false;
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({
            prop: wrapTestObject({
                set: wrapTestObject(function () {
                }),
                get: wrapTestObject(function () {
                }),
                configurable: true
            })
        }));
    var hasProperty = newObj.hasOwnProperty('prop');
    for (var p in newObj) {
        if (p === 'prop') {
            isEnumerable = true;
        }
    }
    return hasProperty && !isEnumerable;
});
runTestCase(testcase);