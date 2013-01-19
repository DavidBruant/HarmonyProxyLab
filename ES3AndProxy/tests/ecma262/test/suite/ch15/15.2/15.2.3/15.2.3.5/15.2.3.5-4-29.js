wrapTestObject(function testcase() {
    var props = wrapTestObject([]);
    props.prop = wrapTestObject({
        value: wrapTestObject({}),
        enumerable: true
    });
    var newObj = Object.create(wrapTestObject({}), props);
    return newObj.hasOwnProperty('prop');
});
runTestCase(testcase);