export class Weapon {

  constructor(
    // raccourci pour déclarer ses propriétés et les initialiser
    public name: string = "",
    private _baseDmg: number = 10,
    private _crit: number = 0,
    private _specialDmg: number = 2,
    private _price: number = 100,
    private _priceTTC: number = 120,
    private _nextDmg: number = 0

  ) {
    this._calc();
  }

  public set price(value: number) {
    if (value < 0) value = 0;
    this._price = value;
    this._priceTTC = value * 1.2;
  }

  public get price(): number {
    return this._price;
  }

  public get priceTTC(): number {
    return this._priceTTC;
  }



  private _calc() {
    this._nextDmg = this._baseDmg + this._specialDmg;
  }

  public set crit(value: number) {
    if (value < 0) value = 0;
    if (value > 1) value = 1;
    this._crit = value;
    this._calc();
  }

  public set specialDmg(value: number) {
    this._specialDmg = value;
    this._calc();
  }

  public set baseDmg(value: number) {
    this._baseDmg = value;
    this._calc();
  }

  public get crit(): number {
    return this._crit;
  }

  public get specialDmg(): number {
    return this._specialDmg;
  }

  public get baseDmg(): number {
    return this._baseDmg;
  }

  public get dmg(): number {
    // le taux de critique est un pourcentage compris entre 0 et 1
    const dmg1 = this._nextDmg;
    const multiplicator = 2;

    if (Math.random() < this._crit) {
      return dmg1 * multiplicator;
    }
    return dmg1;
  }
}
