class Ship {

    constructor(a, b, c, d, e, f) {
        this._type = a;
        this._name = b;
        this._country = c;
        this._year = d;
        this._validity = e;
        this._combustible = f;
    }

}

var ship1 = new Ship('Lanzadera', 'SaturnoV', 'EE.UU', 1967, 1973, "H+O");

console.log(ship1._type);
console.log(ship1._name);
console.log(ship1._country);
console.log(ship1._year);
console.log(ship1._validity);
console.log(ship1._combustible);
