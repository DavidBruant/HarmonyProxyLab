wrapTestObject(function testcase() {
    var argObj = wrapTestObject(function () {
            return arguments;
        })();
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ writable: argObj }) }));
    var hasProperty = newObj.hasOwnProperty('prop');
    newObj.prop = 121;
    return hasProperty && newObj.prop === 121;
});
runTestCase(testcase);