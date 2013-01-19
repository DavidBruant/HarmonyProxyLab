var testcase = wrapTestObject(function testcase() {
        var data1 = 'data';
        var data2 = 'data';
        var fun = wrapTestObject(function (value) {
                data2 = value;
            });
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'set', wrapTestObject({
            get: wrapTestObject(function () {
                return fun;
            }),
            set: wrapTestObject(function (value) {
                fun = value;
            })
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var child = wrapTestObject(new Con());
        child.set = wrapTestObject(function (value) {
            data1 = value;
        });
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ prop: child }));
        obj.prop = 'overrideData';
        return obj.hasOwnProperty('prop') && data1 === 'overrideData' && data2 === 'data';
    });
runTestCase(testcase);