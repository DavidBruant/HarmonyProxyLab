wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({
            prop: wrapTestObject({
                writable: wrapTestObject(function () {
                })
            })
        }));
    var hasProperty = newObj.hasOwnProperty('prop');
    newObj.prop = 121;
    return hasProperty && newObj.prop === 121;
});
runTestCase(testcase);