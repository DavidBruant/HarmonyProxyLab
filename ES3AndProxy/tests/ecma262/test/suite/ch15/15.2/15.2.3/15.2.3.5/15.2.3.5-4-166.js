var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([
                1,
                2,
                3
            ]);
        arr.value = 'ArrValue';
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: arr }));
        return newObj.prop === 'ArrValue';
    });
runTestCase(testcase);