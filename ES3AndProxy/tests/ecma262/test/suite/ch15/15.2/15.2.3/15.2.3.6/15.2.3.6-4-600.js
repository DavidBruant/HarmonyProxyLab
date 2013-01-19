var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Object, 'getOwnPropertyNames');
        var propertyAreCorrect = desc.writable === true && desc.enumerable === false && desc.configurable === true;
        var temp = Object.getOwnPropertyNames;
        try {
            Object.getOwnPropertyNames = '2010';
            var isWritable = Object.getOwnPropertyNames === '2010';
            var isEnumerable = false;
            for (var prop in Object) {
                if (prop === 'getOwnPropertyNames') {
                    isEnumerable = true;
                }
            }
            delete Object.getOwnPropertyNames;
            var isConfigurable = !Object.hasOwnProperty('getOwnPropertyNames');
            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Object, 'getOwnPropertyNames', wrapTestObject({
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            }));
        }
    });
runTestCase(testcase);