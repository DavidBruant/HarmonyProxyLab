wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var data = 'data';
    var arrObj = wrapTestObject([]);
    arrObj.set = wrapTestObject(function (value) {
        data = value;
    });
    Object.defineProperty(obj, 'property', arrObj);
    obj.property = 'overrideData';
    return obj.hasOwnProperty('property') && data === 'overrideData';
});
runTestCase(testcase);