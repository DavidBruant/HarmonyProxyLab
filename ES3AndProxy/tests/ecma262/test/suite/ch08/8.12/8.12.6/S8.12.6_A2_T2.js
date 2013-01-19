var __proto = wrapTestObject({ phylum: 'avis' });
if (!('valueOf' in __proto)) {
    $ERROR('#1: var __proto={phylum:"avis"}; "valueOf" in __proto');
}
var Robin = wrapTestObject(function Robin() {
        this.name = 'robin';
    });
;
Robin.prototype = __proto;
var __my__robin = wrapTestObject(new Robin());
if (!('phylum' in __my__robin)) {
    $ERROR('#2: var __proto={phylum:"avis"}; function Robin(){this.name="robin"}; Robin.prototype=__proto; var __my__robin = new Robin; "phylum" in __my__robin');
}
if (__my__robin.hasOwnProperty('phylum')) {
    $ERROR('#3: var __proto={phylum:"avis"}; function Robin(){this.name="robin"}; Robin.prototype=__proto; var __my__robin = new Robin; __my__robin.hasOwnProperty("phylum") === false. Actual: ' + __my__robin.hasOwnProperty('phylum'));
}