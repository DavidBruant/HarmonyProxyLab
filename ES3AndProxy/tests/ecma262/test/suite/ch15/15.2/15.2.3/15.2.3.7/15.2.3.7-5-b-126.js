var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var arr = wrapTestObject([
                1,
                2,
                3
            ]);
        arr.value = 'Array';
        Object.defineProperties(obj, wrapTestObject({ property: arr }));
        return obj.property === 'Array';
    });
runTestCase(testcase);