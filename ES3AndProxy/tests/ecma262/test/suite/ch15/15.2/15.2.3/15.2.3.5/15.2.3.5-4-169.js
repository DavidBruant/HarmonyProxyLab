wrapTestObject(function testcase() {
    var numObj = wrapTestObject(new Number(123));
    numObj.value = 'NumValue';
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: numObj }));
    return newObj.prop === 'NumValue';
});
runTestCase(testcase);