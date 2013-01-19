wrapTestObject(function testcase() {
    var Func = wrapTestObject(function (a, b) {
            return a + b;
        });
    var fun = wrapTestObject(new Func());
    fun.value = 'FunValue';
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: fun }));
    return newObj.prop === 'FunValue';
});
runTestCase(testcase);