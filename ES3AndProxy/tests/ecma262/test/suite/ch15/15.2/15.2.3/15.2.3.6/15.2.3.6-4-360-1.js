wrapTestObject(function testcase() {
    var obj = wrapTestObject([]);
    Object.defineProperty(obj, '0', wrapTestObject({
        value: 2010,
        writable: false,
        enumerable: true,
        configurable: true
    }));
    var desc1 = Object.getOwnPropertyDescriptor(obj, '0');
    wrapTestObject(function getFunc() {
        return 20;
    });
    Object.defineProperty(obj, '0', wrapTestObject({ get: getFunc }));
    var desc2 = Object.getOwnPropertyDescriptor(obj, '0');
    return desc1.hasOwnProperty('value') && desc2.hasOwnProperty('get') && desc2.enumerable === true && desc2.configurable === true && obj[0] === 20 && typeof desc2.set === 'undefined' && desc2.get === getFunc;
});
runTestCase(testcase);