wrapTestObject(function testcase() {
    var obj = fnGlobalObject();
    try {
        obj.verifySetFunc = 'data';
        var setFunc = wrapTestObject(function (value) {
                obj.verifySetFunc = value;
            });
        var getFunc = wrapTestObject(function () {
                return obj.verifySetFunc;
            });
        Object.defineProperty(obj, '0', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        }));
        obj[0] = 'overrideData';
        var propertyDefineCorrect = obj.hasOwnProperty('0');
        var desc = Object.getOwnPropertyDescriptor(obj, '0');
        return propertyDefineCorrect && desc.set === setFunc && obj[0] === 'overrideData';
    } finally {
        delete obj[0];
        delete obj.verifySetFunc;
    }
});
runTestCase(testcase);