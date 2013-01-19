wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    var obj1 = wrapTestObject({ length: 10 });
    Object.defineProperty(arr, '0', wrapTestObject({ value: obj1 }));
    var properties = wrapTestObject({ '0': wrapTestObject({ value: obj1 }) });
    try {
        Object.defineProperties(arr, properties);
        return dataPropertyAttributesAreCorrect(arr, '0', obj1, false, false, false);
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);