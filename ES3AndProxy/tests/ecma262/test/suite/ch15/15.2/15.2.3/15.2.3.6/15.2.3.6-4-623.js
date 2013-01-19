wrapTestObject(function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Date.prototype, 'toISOString');
    var propertyAreCorrect = desc.writable === true && desc.enumerable === false && desc.configurable === true;
    var temp = Date.prototype.toISOString;
    try {
        Date.prototype.toISOString = '2010';
        var isWritable = Date.prototype.toISOString === '2010';
        var isEnumerable = false;
        for (var prop in Date.prototype) {
            if (prop === 'toISOString') {
                isEnumerable = true;
            }
        }
        delete Date.prototype.toISOString;
        var isConfigurable = !Date.prototype.hasOwnProperty('toISOString');
        return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
    } finally {
        Object.defineProperty(Date.prototype, 'toISOString', wrapTestObject({
            value: temp,
            writable: true,
            enumerable: false,
            configurable: true
        }));
    }
});
runTestCase(testcase);