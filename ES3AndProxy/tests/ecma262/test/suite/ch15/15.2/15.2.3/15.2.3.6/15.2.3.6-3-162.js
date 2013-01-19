var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var attr = wrapTestObject({});
        Object.defineProperty(attr, 'writable', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        Object.defineProperty(obj, 'property', attr);
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = typeof obj.property === 'undefined';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);