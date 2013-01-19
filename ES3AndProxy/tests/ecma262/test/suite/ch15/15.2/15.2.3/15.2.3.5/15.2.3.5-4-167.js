wrapTestObject(function testcase() {
    var str = wrapTestObject(new String('abc'));
    str.value = 'StrValue';
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: str }));
    return newObj.prop === 'StrValue';
});
runTestCase(testcase);