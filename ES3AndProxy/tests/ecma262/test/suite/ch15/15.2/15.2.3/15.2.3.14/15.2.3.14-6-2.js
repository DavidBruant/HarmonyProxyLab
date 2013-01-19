var testcase = wrapTestObject(function testcase() {
        var sparseArray = wrapTestObject([
                1,
                2,
                ,
                4,
                ,
                6
            ]);
        var tempArray = wrapTestObject([]);
        for (var p in sparseArray) {
            if (sparseArray.hasOwnProperty(p)) {
                tempArray.push(p);
            }
        }
        var returnedArray = Object.keys(sparseArray);
        for (var index in returnedArray) {
            if (tempArray[index] !== returnedArray[index]) {
                return false;
            }
        }
        return true;
    });
runTestCase(testcase);