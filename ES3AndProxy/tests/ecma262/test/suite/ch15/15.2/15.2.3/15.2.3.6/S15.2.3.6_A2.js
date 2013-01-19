var base = wrapTestObject({});
var derived = Object.create(base);
wrapTestObject(function getter() {
    return 'gotten';
});
Object.defineProperty(base, 'foo', wrapTestObject({ get: getter }));
if (derived.hasOwnProperty('foo')) {
    $ERROR('Accessor properties inherit as own properties');
}