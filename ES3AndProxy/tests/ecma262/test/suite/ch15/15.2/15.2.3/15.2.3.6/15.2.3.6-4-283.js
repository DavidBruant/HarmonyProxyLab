wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 'property', wrapTestObject({
        value: 12,
        enumerable: false
    }));
    try {
        Object.defineProperty(arrObj, 'property', wrapTestObject({ enumerable: true }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, 'property', 12, false, false, false);
    }
});
runTestCase(testcase);