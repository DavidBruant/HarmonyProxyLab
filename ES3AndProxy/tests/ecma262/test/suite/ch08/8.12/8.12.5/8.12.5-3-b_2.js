wrapTestObject(function testcase() {
    var tempObj = wrapTestObject({});
    Object.defineProperty(tempObj, 'reduce', wrapTestObject({
        value: 456,
        enumerable: false,
        writable: true
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
                if (i === 'value') {
                    if (origDesc[i] === newDesc[i]) {
                        return false;
                    }
                } else if (origDesc[i] !== newDesc[i]) {
                    return false;
                }
            }
        }
        return true;
    } finally {
        tempObj.reduce = origReduce;
    }
});
runTestCase(testcase);