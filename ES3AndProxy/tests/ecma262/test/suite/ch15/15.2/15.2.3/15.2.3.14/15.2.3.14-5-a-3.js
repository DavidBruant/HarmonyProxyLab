var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ prop1: 100 });
        var array = Object.keys(obj);
        var desc = Object.getOwnPropertyDescriptor(array, '0');
        var result = false;
        for (var index in array) {
            if (obj.hasOwnProperty(array[index]) && array[index] === 'prop1') {
                result = true;
            }
        }
        return result && desc.hasOwnProperty('enumerable') && desc.enumerable === true;
    });
runTestCase(testcase);