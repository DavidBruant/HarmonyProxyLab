var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'value', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var descObj = wrapTestObject(new Con());
        Object.defineProperties(obj, wrapTestObject({ property: descObj }));
        return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
    });
runTestCase(testcase);