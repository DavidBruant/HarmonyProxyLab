var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({ value: 'inheritedDataProperty' });
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var descObj = wrapTestObject(new ConstructFun());
        Object.defineProperty(descObj, 'value', wrapTestObject({
            get: wrapTestObject(function () {
                return 'ownAccessorProperty';
            })
        }));
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
        return newObj.prop === 'ownAccessorProperty';
    });
runTestCase(testcase);