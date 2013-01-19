var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        Object.defineProperty(proto, 'configurable', wrapTestObject({
            get: wrapTestObject(function () {
                return true;
            })
        }));
        var ConstructFun = wrapTestObject(function () {
            });
        ConstructFun.prototype = proto;
        var descObj = wrapTestObject(new ConstructFun());
        Object.defineProperty(descObj, 'configurable', wrapTestObject({ value: false }));
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
        var result1 = newObj.hasOwnProperty('prop');
        delete newObj.prop;
        var result2 = newObj.hasOwnProperty('prop');
        return result1 === true && result2 === true;
    });
runTestCase(testcase);