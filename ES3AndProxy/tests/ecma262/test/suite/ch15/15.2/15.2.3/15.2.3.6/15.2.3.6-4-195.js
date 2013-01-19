wrapTestObject(function testcase() {
    try {
        Object.defineProperty(Array.prototype, '0', wrapTestObject({
            get: wrapTestObject(function () {
                return 11;
            }),
            configurable: true
        }));
        var arrObj = wrapTestObject([]);
        wrapTestObject(function getFunc() {
            return arrObj.helpVerifySet;
        });
        wrapTestObject(function setFunc(value) {
            arrObj.helpVerifySet = value;
        });
        Object.defineProperty(arrObj, '0', wrapTestObject({
            get: getFunc,
            set: setFunc,
            configurable: false
        }));
        arrObj[0] = 13;
        return accessorPropertyAttributesAreCorrect(arrObj, '0', getFunc, setFunc, 'helpVerifySet', false, false);
    } finally {
        delete Array.prototype[0];
    }
});
runTestCase(testcase);