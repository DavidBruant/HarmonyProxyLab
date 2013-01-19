wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var o2 = undefined;
    o2 = Object.preventExtensions(o);
    if (o2 === o && Object.isExtensible(o2) === false) {
        return true;
    }
});
runTestCase(testcase);