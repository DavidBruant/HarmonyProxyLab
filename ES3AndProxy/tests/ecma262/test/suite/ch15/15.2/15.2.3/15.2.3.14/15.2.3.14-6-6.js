var testcase = wrapTestObject(function testcase() {
        var obj = fnGlobalObject();
        var tempArray = wrapTestObject([]);
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                tempArray.push(p);
            }
        }
        var returnedArray = Object.keys(obj);
        for (var index in returnedArray) {
            if (tempArray[index] !== returnedArray[index]) {
                return false;
            }
        }
        return true;
    });
runTestCase(testcase);