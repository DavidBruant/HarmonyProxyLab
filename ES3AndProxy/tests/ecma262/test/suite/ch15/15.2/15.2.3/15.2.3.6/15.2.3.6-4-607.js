var testcase = wrapTestObject(function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Object, 'isSealed');
        var propertyAreCorrect = desc.writable === true && desc.enumerable === false && desc.configurable === true;
        var temp = Object.isSealed;
        try {
            Object.isSealed = '2010';
            var isWritable = Object.isSealed === '2010';
            var isEnumerable = false;
            for (var prop in Object) {
                if (prop === 'isSealed') {
                    isEnumerable = true;
                }
            }
            delete Object.isSealed;
            var isConfigurable = !Object.hasOwnProperty('isSealed');
            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Object, 'isSealed', wrapTestObject({
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            }));
        }
    });
runTestCase(testcase);