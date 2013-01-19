var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({ writable: true });
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var descObj = wrapTestObject(new ConstructFun());
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
        var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
        newObj.prop = 'isWritable';
        var afterWrite = newObj.prop === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);