var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return 12;
            }),
            enumerable: true
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var child = wrapTestObject(new Con());
        Object.defineProperty(child, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject({
                    set: wrapTestObject(function () {
                    })
                });
            }),
            enumerable: true
        }));
        Object.defineProperties(obj, child);
        return obj.hasOwnProperty('prop') && typeof obj.prop === 'undefined';
    });
runTestCase(testcase);