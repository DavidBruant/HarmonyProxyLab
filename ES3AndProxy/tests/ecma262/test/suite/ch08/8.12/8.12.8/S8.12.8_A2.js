try {
    var __obj = wrapTestObject({
            toString: wrapTestObject(function () {
                return wrapTestObject(new Object());
            }),
            valueOf: wrapTestObject(function () {
                return 1;
            })
        });
    if (String(__obj) !== '1') {
        $ERROR('#1.1: var __obj = {toString: function() {return new Object();}, valueOf: function() {return 1;}}; String(__obj) === "1". Actual: ' + String(__obj));
    }
} catch (e) {
    $ERROR('#1.2: var __obj = {toString: function() {return new Object();}, valueOf: function() {return 1;}}; String(__obj) === "1". Actual: ' + e);
}