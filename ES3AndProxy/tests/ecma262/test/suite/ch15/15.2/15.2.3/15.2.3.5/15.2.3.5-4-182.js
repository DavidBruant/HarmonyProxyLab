wrapTestObject(function testcase() {
    var proto = wrapTestObject({ writable: false });
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var descObj = wrapTestObject(new ConstructFun());
    descObj.writable = true;
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    var beforeWrite = newObj.hasOwnProperty('prop') && typeof newObj.prop === 'undefined';
    newObj.prop = 'isWritable';
    var afterWrite = newObj.prop === 'isWritable';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);