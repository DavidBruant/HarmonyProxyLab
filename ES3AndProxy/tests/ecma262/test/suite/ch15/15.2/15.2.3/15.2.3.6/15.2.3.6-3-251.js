wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var data = 'data';
    var boolObj = wrapTestObject(new Boolean(true));
    boolObj.set = wrapTestObject(function (value) {
        data = value;
    });
    Object.defineProperty(obj, 'property', boolObj);
    obj.property = 'overrideData';
    return obj.hasOwnProperty('property') && data === 'overrideData';
});
runTestCase(testcase);