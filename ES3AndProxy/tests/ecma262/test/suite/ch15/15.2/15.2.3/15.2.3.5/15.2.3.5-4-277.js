var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'set', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject(function () {
                });
            })
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(child, 'set', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: child }));
        var desc = Object.getOwnPropertyDescriptor(newObj, 'prop');
        return newObj.hasOwnProperty('prop') && typeof desc.set === 'undefined';
    });
runTestCase(testcase);