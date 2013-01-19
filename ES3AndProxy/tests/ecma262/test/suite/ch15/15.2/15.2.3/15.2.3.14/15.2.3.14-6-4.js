wrapTestObject(function testcase() {
    var func = wrapTestObject(function (a, b, c) {
            return arguments;
        });
    var args = func(1, 'b', false);
    var tempArray = wrapTestObject([]);
    for (var p in args) {
        if (args.hasOwnProperty(p)) {
            tempArray.push(p);
        }
    }
    var returnedArray = Object.keys(args);
    for (var index in returnedArray) {
        if (tempArray[index] !== returnedArray[index]) {
            return false;
        }
    }
    return true;
});
runTestCase(testcase);