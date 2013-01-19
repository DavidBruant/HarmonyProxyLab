var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var argObj = wrapTestObject(function () {
                return arguments;
            })(1, true, 'a');
        Object.defineProperty(obj, 'property', wrapTestObject({ writable: argObj }));
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = obj.property === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);