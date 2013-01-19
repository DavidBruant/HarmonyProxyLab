var testcase = wrapTestObject(function testcase() {
        var tempObj = wrapTestObject({});
        Object.defineProperty(tempObj, 'reduce', wrapTestObject({
            get: wrapTestObject(function () {
                return 456;
            }),
            enumerable: false,
            set: wrapTestObject(function () {
                ;
            })
        }));
        var origReduce = tempObj.reduce;
        var origDesc = Object.getOwnPropertyDescriptor(tempObj, 'reduce');
        var newDesc;
        try {
            tempObj.reduce = 123;
            newDesc = Object.getOwnPropertyDescriptor(tempObj, 'reduce');
            var descArray = wrapTestObject([
                    origDesc,
                    newDesc
                ]);
            for (var j in descArray) {
                for (var i in descArray[j]) {
                    if (origDesc[i] !== newDesc[i]) {
                        return false;
                    }
                }
            }
            return tempObj.reduce === 456;
        } finally {
            tempObj.reduce = origReduce;
        }
    });
runTestCase(testcase);