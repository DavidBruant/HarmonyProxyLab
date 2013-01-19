var FooObj = wrapTestObject(function FooObj() {
    });
;
FooObj.prototype.propFoo = 'some';
var __obj = wrapTestObject(new FooObj());
if (__obj.propFoo !== 'some') {
    $ERROR('#1: function FooObj(){}; FooObj.prototype.propFoo="some"; var __obj= new FooObj; __obj.propFoo === "some". Actual: ' + __obj.propFoo);
}
if (__obj['propFoo'] !== 'some') {
    $ERROR('#1: function FooObj(){}; FooObj.prototype.propFoo="some"; var __obj= new FooObj; __obj[\'propFoo\'] === "some". Actual: ' + __obj['propFoo']);
}