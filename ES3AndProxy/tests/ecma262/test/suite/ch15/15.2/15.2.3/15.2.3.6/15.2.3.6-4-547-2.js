var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject(function () {
                return arguments;
            })();
        obj.verifySetFunc = 'data';
        var getFunc = wrapTestObject(function () {
                return obj.verifySetFunc;
            });
        var setFunc = wrapTestObject(function (value) {
                obj.verifySetFunc = value;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: false
        }));
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        try {
            Object.defineProperty(obj, 'prop', wrapTestObject({ value: 1001 }));
            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
            return desc1.hasOwnProperty('get') && !desc2.hasOwnProperty('value') && e instanceof TypeError && accessorPropertyAttributesAreCorrect(obj, 'prop', getFunc, setFunc, 'verifySetFunc', true, false);
        }
    });
runTestCase(testcase);