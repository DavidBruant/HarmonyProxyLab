var testcase = wrapTestObject(function testcase() {
        var descObj = wrapTestObject({ value: 100 });
        Object.defineProperty(descObj, 'writable', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
        var beforeWrite = newObj.prop === 100;
        newObj.prop = 'isWritable';
        var afterWrite = newObj.prop === 100;
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);