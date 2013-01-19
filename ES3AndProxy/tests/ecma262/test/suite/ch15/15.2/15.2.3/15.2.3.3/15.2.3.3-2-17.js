wrapTestObject(function testcase() {
    var obj = wrapTestObject({ '1e+21': 1 });
    var desc = Object.getOwnPropertyDescriptor(obj, 1e+21);
    return desc.value === 1;
});
runTestCase(testcase);