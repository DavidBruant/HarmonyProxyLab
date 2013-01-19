var _map = wrapTestObject({
        1: 'one',
        two: 2
    });
_map[1] = 'uno';
if (_map[1] !== 'uno') {
    $ERROR('#1: var _map={1:"one",two:2}; _map[1]="uno"; _map[1] === "uno". Actual: ' + _map[1]);
}
_map['1'] = 1;
if (_map[1] !== 1) {
    $ERROR('#2: var _map={1:"one",two:2}; _map[1]="uno"; _map["1"]=1; _map[1] === 1. Actual: ' + _map[1]);
}
_map['two'] = 'two';
if (_map['two'] !== 'two') {
    $ERROR('#3: var _map={1:"one",two:2}; _map[1]="uno"; _map["1"]=1; _map["two"]="two"; _map["two"] === "two". Actual: ' + _map['two']);
}
_map.two = 'duo';
if (_map.two !== 'duo') {
    $ERROR('#4: var _map={1:"one",two:2}; _map[1]="uno"; _map["1"]=1; _map["two"]="two"; _map.two="duo"; _map.two === "duo". Actual: ' + _map.two);
}