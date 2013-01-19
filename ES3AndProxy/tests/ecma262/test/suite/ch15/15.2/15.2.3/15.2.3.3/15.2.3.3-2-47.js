var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({});
        var valueOfAccessed = false;
        var toStringAccessed = false;
        proto.toString = wrapTestObject(function () {
            toStringAccessed = true;
            return 'test';
        });
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var child = wrapTestObject(new Con());
        child.valueOf = wrapTestObject(function () {
            valueOfAccessed = true;
            return '10';
        });
        var obj = wrapTestObject({
                '10': 'length1',
                'test': 'length2'
            });
        var desc = Object.getOwnPropertyDescriptor(obj, child);
        return desc.value === 'length2' && toStringAccessed && !valueOfAccessed;
    });
runTestCase(testcase);