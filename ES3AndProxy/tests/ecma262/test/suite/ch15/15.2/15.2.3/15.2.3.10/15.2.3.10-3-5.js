wrapTestObject(function testcase() {
    var strObj = wrapTestObject(new String());
    var preCheck = Object.isExtensible(strObj);
    Object.preventExtensions(strObj);
    try {
        Object.defineProperty(strObj, '0', wrapTestObject({ value: 'c' }));
        return false;
    } catch (e) {
        return e instanceof TypeError && preCheck && !strObj.hasOwnProperty('0') && typeof strObj[0] === 'undefined';
    }
});
runTestCase(testcase);