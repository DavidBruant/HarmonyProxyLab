var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var toStringAccessed = false;
        var valueOfAccessed = false;
        var proto = wrapTestObject({
                value: wrapTestObject({
                    valueOf: wrapTestObject(function () {
                        valueOfAccessed = true;
                        return 2;
                    })
                })
            });
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var child = wrapTestObject(new Con());
        Object.defineProperty(child, 'value', wrapTestObject({
            value: wrapTestObject({
                toString: wrapTestObject(function () {
                    toStringAccessed = true;
                    return 3;
                })
            })
        }));
        Object.defineProperties(arr, wrapTestObject({ length: child }));
        return arr.length === 3 && toStringAccessed && !valueOfAccessed;
    });
runTestCase(testcase);