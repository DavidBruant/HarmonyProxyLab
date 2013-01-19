wrapTestObject(function testcase() {
    var funObj = wrapTestObject(function () {
        });
    funObj.foo = 10;
    Object.freeze(funObj);
    var desc = Object.getOwnPropertyDescriptor(funObj, 'foo');
    delete funObj.foo;
    return funObj.foo === 10 && desc.configurable === false && desc.writable === false;
});
runTestCase(testcase);