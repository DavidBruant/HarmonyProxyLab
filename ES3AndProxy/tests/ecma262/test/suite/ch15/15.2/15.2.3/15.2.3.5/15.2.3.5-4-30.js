wrapTestObject(function testcase() {
    var props = wrapTestObject(new String());
    props.prop = wrapTestObject({
        value: 12,
        enumerable: true
    });
    var newObj = Object.create(wrapTestObject({}), props);
    return newObj.hasOwnProperty('prop');
});
runTestCase(testcase);