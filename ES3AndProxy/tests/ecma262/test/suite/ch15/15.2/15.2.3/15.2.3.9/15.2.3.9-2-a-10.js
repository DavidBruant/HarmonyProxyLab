wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    arrObj.foo = 10;
    Object.freeze(arrObj);
    var desc = Object.getOwnPropertyDescriptor(arrObj, 'foo');
    delete arrObj.foo;
    return arrObj.foo === 10 && desc.configurable === false && desc.writable === false;
});
runTestCase(testcase);