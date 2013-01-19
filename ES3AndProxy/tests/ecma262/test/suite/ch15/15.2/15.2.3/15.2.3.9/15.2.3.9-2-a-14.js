wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([
            0,
            1,
            2
        ]);
    Object.freeze(arrObj);
    var desc = Object.getOwnPropertyDescriptor(arrObj, '0');
    delete arrObj[0];
    return arrObj[0] === 0 && desc.configurable === false && desc.writable === false;
});
runTestCase(testcase);