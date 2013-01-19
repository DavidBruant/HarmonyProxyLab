wrapTestObject(function testcase() {
    var strObj = wrapTestObject(new String('abc'));
    Object.freeze(strObj);
    var desc = Object.getOwnPropertyDescriptor(strObj, '0');
    delete strObj[0];
    return strObj[0] === 'a' && desc.configurable === false && desc.writable === false;
});
runTestCase(testcase);