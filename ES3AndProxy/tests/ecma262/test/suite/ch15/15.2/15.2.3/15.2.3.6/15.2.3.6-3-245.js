var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var attributes = wrapTestObject({});
        Object.defineProperty(attributes, 'set', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        Object.defineProperty(obj, 'property', attributes);
        obj.property = 'overrideOwnData';
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        return obj.hasOwnProperty('property') && typeof obj.property === 'undefined' && typeof desc.set === 'undefined';
    });
runTestCase(testcase);