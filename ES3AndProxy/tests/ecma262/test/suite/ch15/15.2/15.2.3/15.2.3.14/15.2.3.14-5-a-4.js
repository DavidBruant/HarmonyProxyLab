var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ prop1: 100 });
        var array = Object.keys(obj);
        var desc = Object.getOwnPropertyDescriptor(array, '0');
        delete array[0];
        return typeof array[0] === 'undefined' && desc.hasOwnProperty('configurable') && desc.configurable === true;
    });
runTestCase(testcase);