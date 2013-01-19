wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var funObj = wrapTestObject(function (a, b) {
            return a + b;
        });
    funObj.writable = true;
    Object.defineProperty(obj, 'property', funObj);
    var beforeWrite = obj.hasOwnProperty('property');
    obj.property = 'isWritable';
    var afterWrite = obj.property === 'isWritable';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);