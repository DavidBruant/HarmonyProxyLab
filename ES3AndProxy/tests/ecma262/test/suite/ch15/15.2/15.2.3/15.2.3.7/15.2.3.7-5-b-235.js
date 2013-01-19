var testcase = wrapTestObject(function testcase() {
        var data1 = 'data';
        var data2 = 'data';
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'set', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject(function (value) {
                    data1 = value;
                });
            })
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var child = wrapTestObject(new Con());
        Object.defineProperty(child, 'set', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject(function (value) {
                    data2 = value;
                });
            })
        }));
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ prop: child }));
        obj.prop = 'overrideData';
        return obj.hasOwnProperty('prop') && data2 === 'overrideData' && data1 === 'data';
    });
runTestCase(testcase);