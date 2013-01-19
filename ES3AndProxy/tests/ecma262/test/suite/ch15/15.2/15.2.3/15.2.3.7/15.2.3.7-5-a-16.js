wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var props = wrapTestObject(new Error('test'));
    var obj1 = wrapTestObject({ value: 11 });
    props.message = obj1;
    props.name = obj1;
    props.description = obj1;
    props.prop = wrapTestObject({ value: 16 });
    Object.defineProperties(obj, props);
    return obj.hasOwnProperty('prop') && obj.prop === 16;
});
runTestCase(testcase);