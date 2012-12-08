/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-251.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, 'name' is data property and 'desc' is data descriptor, and the [[Configurable]] attribute value of 'name' is false, test TypeError is thrown if the [[Writable]] attribute value of 'name' is false, and the [[Value]] field of 'desc' and the [[Value]] attribute value of 'name' are two objects which refer to the different objects (15.4.5.1 step 4.c)
 */


function testcase() {
        var arrObj = [];
        var obj = { length: 10 };

        Object.defineProperty(arrObj, "1", {
            value: obj
        });

        try {
            Object.defineProperty(arrObj, "1", { value: {} });

            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, "1", obj, false, false, false);
        }
    }
runTestCase(testcase);
