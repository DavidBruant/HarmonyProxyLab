wrapTestObject(function testcase() {
    var obj = wrapTestObject([]);
    obj.verifySetFunc = 'data';
    var getFunc = wrapTestObject(function () {
            return obj.verifySetFunc;
        });
    var setFunc = wrapTestObject(function (value) {
            obj.verifySetFunc = value;
        });
    Object.defineProperty(obj, '0', wrapTestObject({
        get: getFunc,
        set: setFunc,
        enumerable: true,
        configurable: false
    }));
    var desc1 = Object.getOwnPropertyDescriptor(obj, '0');
    try {
        Object.defineProperty(obj, '0', wrapTestObject({ value: 1001 }));
        return false;
    } catch (e) {
        var desc2 = Object.getOwnPropertyDescriptor(obj, '0');
        return desc1.hasOwnProperty('get') && !desc2.hasOwnProperty('value') && e instanceof TypeError && accessorPropertyAttributesAreCorrect(obj, '0', getFunc, setFunc, 'verifySetFunc', true, false);
    }
});
runTestCase(testcase);