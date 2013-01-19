var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var toStringAccessed = false;
        var valueOfAccessed = false;
        Object.defineProperties(arr, wrapTestObject({
            length: wrapTestObject({
                value: wrapTestObject({
                    toString: wrapTestObject(function () {
                        toStringAccessed = true;
                        return '2';
                    }),
                    valueOf: wrapTestObject(function () {
                        valueOfAccessed = true;
                        return 3;
                    })
                })
            })
        }));
        return arr.length === 3 && !toStringAccessed && valueOfAccessed;
    });
runTestCase(testcase);