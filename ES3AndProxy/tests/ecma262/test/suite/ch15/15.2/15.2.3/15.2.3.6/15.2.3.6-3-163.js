var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'writable', wrapTestObject({
            get: wrapTestObject(function () {
                return true;
            })
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(child, 'writable', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        Object.defineProperty(obj, 'property', child);
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = typeof obj.property === 'undefined';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);