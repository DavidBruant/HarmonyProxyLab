wrapTestObject(function testcase() {
    var isNotConfigurable = false;
    try {
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({
                prop: wrapTestObject({
                    value: 1001,
                    writable: true,
                    enumerable: true
                })
            }));
        var hasProperty = newObj.hasOwnProperty('prop');
        delete newObj.prop;
        isNotConfigurable = newObj.hasOwnProperty('prop');
        return hasProperty && isNotConfigurable;
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);