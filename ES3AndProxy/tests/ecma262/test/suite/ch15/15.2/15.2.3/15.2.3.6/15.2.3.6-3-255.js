wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var data = 'data';
    var regObj = wrapTestObject(new RegExp());
    regObj.set = wrapTestObject(function (value) {
        data = value;
    });
    Object.defineProperty(obj, 'property', regObj);
    obj.property = 'overrideData';
    return obj.hasOwnProperty('property') && data === 'overrideData';
});
runTestCase(testcase);