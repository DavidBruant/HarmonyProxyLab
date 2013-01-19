var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({ value: 100 });
        Object.defineProperty(proto, 'writable', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var descObj = wrapTestObject(new ConstructFun());
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
        var beforeWrite = newObj.prop === 100;
        newObj.prop = 'isWritable';
        var afterWrite = newObj.prop === 100;
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);