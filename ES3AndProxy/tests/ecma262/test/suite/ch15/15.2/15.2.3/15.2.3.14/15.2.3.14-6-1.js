var testcase = wrapTestObject(function testcase() {
        var denseArray = wrapTestObject([
                1,
                2,
                3
            ]);
        var tempArray = wrapTestObject([]);
        for (var p in denseArray) {
            if (denseArray.hasOwnProperty(p)) {
                tempArray.push(p);
            }
        }
        var returnedArray = Object.keys(denseArray);
        for (var index in returnedArray) {
            if (tempArray[index] !== returnedArray[index]) {
                return false;
            }
        }
        return true;
    });
runTestCase(testcase);