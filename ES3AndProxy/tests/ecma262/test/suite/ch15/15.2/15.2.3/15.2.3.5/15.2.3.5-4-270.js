var testcase = wrapTestObject(function testcase() {
        var data1 = 'data';
        var data2 = 'data';
        var proto = wrapTestObject({
                set: wrapTestObject(function (value) {
                    data2 = value;
                })
            });
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        child.set = wrapTestObject(function (value) {
            data1 = value;
        });
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: child }));
        var hasProperty = newObj.hasOwnProperty('prop');
        newObj.prop = 'overrideData';
        return hasProperty && data1 === 'overrideData' && data2 === 'data';
    });
runTestCase(testcase);