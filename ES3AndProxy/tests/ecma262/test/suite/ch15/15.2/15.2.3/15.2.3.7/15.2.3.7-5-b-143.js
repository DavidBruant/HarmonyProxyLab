var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({ value: 120 });
        Object.defineProperty(proto, 'writable', wrapTestObject({
            get: wrapTestObject(function () {
                return true;
            })
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var descObj = wrapTestObject(new Con());
        Object.defineProperty(descObj, 'writable', wrapTestObject({ value: false }));
        Object.defineProperties(obj, wrapTestObject({ property: descObj }));
        obj.property = 'isWritable';
        return obj.hasOwnProperty('property') && obj.property === 120;
    });
runTestCase(testcase);