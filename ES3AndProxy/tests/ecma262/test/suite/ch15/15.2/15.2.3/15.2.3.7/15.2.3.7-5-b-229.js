wrapTestObject(function testcase() {
    var data = 'data';
    var proto = wrapTestObject({
            set: wrapTestObject(function (value) {
                data = value;
            })
        });
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var child = wrapTestObject(new Con());
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({ prop: child }));
    obj.prop = 'overrideData';
    return obj.hasOwnProperty('prop') && data === 'overrideData';
});
runTestCase(testcase);