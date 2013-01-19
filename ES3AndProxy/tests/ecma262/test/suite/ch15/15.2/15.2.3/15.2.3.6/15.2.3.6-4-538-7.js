wrapTestObject(function testcase() {
    var obj = fnGlobalObject();
    obj.verifySetFunc = 'data';
    var getFunc = wrapTestObject(function () {
            return obj.verifySetFunc;
        });
    var setFunc = wrapTestObject(function (value) {
            obj.verifySetFunc = value;
        });
    try {
        Object.defineProperty(obj, '0', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        }));
        var desc1 = Object.getOwnPropertyDescriptor(obj, '0');
        Object.defineProperty(obj, '0', wrapTestObject({ value: 1001 }));
        var desc2 = Object.getOwnPropertyDescriptor(obj, '0');
        return desc1.hasOwnProperty('get') && desc2.hasOwnProperty('value') && typeof desc2.get === 'undefined' && typeof desc2.get === 'undefined' && dataPropertyAttributesAreCorrect(obj, '0', 1001, false, true, true);
    } finally {
        delete obj[0];
        delete obj.verifySetFunc;
    }
});
runTestCase(testcase);