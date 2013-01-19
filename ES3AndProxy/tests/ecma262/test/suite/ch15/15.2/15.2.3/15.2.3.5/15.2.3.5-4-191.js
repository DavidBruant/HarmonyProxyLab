wrapTestObject(function testcase() {
    var Func = wrapTestObject(function (a, b) {
            return a + b;
        });
    var fun = wrapTestObject(new Func());
    fun.writable = true;
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: fun }));
    var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
    newObj.prop = 'isWritable';
    var afterWrite = newObj.prop === 'isWritable';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);