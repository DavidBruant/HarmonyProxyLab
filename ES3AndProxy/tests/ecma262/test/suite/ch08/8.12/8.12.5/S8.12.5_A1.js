var __map = wrapTestObject({});
__map[1] = 'one';
__map['two'] = 2;
__map['3'] = 'tre';
if (__map[1] !== 'one') {
    $ERROR('#1: var __map={}; __map[1]="one"; __map["two"]=2; __map["3"]="tre"; __map[1] === "one". Actual: ' + __map[1]);
}
if (__map['two'] !== 2) {
    $ERROR('#2: var __map={}; __map[1]="one"; __map["two"]=2; __map["3"]="tre"; __map["two"] === 2. Actual: ' + __map['two']);
}
if (__map['3'] !== 'tre') {
    $ERROR('#3: var __map={}; __map[1]="one"; __map["two"]=2; __map["3"]="tre"; __map["3"] === "tre". Actual: ' + __map['3']);
}