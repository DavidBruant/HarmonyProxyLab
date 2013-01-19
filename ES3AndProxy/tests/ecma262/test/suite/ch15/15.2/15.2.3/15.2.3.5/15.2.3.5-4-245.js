wrapTestObject(function testcase() {
    var arrayObj = wrapTestObject([
            1,
            2,
            3
        ]);
    arrayObj.get = wrapTestObject(function () {
        return 'VerifyArrayObject';
    });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: arrayObj }));
    return newObj.prop === 'VerifyArrayObject';
});
runTestCase(testcase);