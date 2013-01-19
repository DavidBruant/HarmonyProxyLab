try {
    var __obj = wrapTestObject({
            toString: wrapTestObject(function () {
                return wrapTestObject(new Object());
            })
        });
    String(__obj);
    $ERROR('#1.1: var __obj = {toString: function() {return new Object();}}; String(__obj) throw TypeError. Actual: ' + String(__obj));
} catch (e) {
    if (e instanceof TypeError !== true) {
        $ERROR('#1.2: var __obj = {toString: function() {return new Object();}}; String(__obj) throw TypeError. Actual: ' + e);
    }
}