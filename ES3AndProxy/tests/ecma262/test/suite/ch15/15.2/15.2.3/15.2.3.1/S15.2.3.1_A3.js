delete Object.prototype;
if (!Object.hasOwnProperty('prototype')) {
    $ERROR('#2: the Object.prototype property has the attributes DontDelete.');
}