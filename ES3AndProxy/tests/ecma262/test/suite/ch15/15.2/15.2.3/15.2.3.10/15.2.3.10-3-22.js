wrapTestObject(function testcase() {
    var obj = wrapTestObject({ prop: 12 });
    var preCheck = Object.isExtensible(obj);
    Object.preventExtensions(obj);
    delete obj.prop;
    return preCheck && !obj.hasOwnProperty('prop');
});
runTestCase(testcase);