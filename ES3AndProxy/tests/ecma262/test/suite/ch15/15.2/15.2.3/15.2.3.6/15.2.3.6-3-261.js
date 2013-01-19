wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({ set: undefined }));
    obj.property = 'overrideData';
    var desc = Object.getOwnPropertyDescriptor(obj, 'property');
    return obj.hasOwnProperty('property') && typeof obj.property === 'undefined' && typeof desc.set === 'undefined';
});
runTestCase(testcase);