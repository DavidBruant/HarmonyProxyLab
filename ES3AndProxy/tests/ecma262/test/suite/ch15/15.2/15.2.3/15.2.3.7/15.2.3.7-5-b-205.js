wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var arr = wrapTestObject([]);
    arr.get = wrapTestObject(function () {
        return 'Array';
    });
    Object.defineProperties(obj, wrapTestObject({ property: arr }));
    return obj.property === 'Array';
});
runTestCase(testcase);