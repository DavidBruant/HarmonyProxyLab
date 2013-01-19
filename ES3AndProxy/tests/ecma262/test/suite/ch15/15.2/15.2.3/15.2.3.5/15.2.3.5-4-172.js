wrapTestObject(function testcase() {
    var regObj = wrapTestObject(new RegExp());
    regObj.value = 'RegExpValue';
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: regObj }));
    return newObj.prop === 'RegExpValue';
});
runTestCase(testcase);