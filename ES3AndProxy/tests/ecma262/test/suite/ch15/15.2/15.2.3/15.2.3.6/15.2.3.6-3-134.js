var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var proto = wrapTestObject({ value: 'inheritedDataProperty' });
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var child = wrapTestObject(new ConstructFun());
        Object.defineProperty(child, 'value', wrapTestObject({
            get: wrapTestObject(function () {
                return 'ownAccessorProperty';
            })
        }));
        Object.defineProperty(obj, 'property', child);
        return obj.property === 'ownAccessorProperty';
    });
runTestCase(testcase);