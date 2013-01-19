wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var data = 'data';
    var errObj = wrapTestObject(new Error());
    errObj.set = wrapTestObject(function (value) {
        data = value;
    });
    Object.defineProperty(obj, 'property', errObj);
    obj.property = 'overrideData';
    return obj.hasOwnProperty('property') && data === 'overrideData';
});
runTestCase(testcase);