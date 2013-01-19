wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var data = 'data';
    var funObj = wrapTestObject(function () {
        });
    funObj.set = wrapTestObject(function (value) {
        data = value;
    });
    Object.defineProperty(obj, 'property', funObj);
    obj.property = 'overrideData';
    return obj.hasOwnProperty('property') && data === 'overrideData';
});
runTestCase(testcase);