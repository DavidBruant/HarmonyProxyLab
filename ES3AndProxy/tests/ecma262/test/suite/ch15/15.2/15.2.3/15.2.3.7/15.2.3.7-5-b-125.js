wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var func = wrapTestObject(function (a, b) {
            return a + b;
        });
    func.value = 'Function';
    Object.defineProperties(obj, wrapTestObject({ property: func }));
    return obj.property === 'Function';
});
runTestCase(testcase);