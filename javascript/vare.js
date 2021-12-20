export default class Vare {
  constructor(model, pris, farve, størrelse, sustainability, billedsti, type, antalPåLager) {
    this._model = model;
    this._pris = pris;
    this._farve = farve;
    this._størrelse = størrelse;
    this._sustainability = sustainability;
    this._billedsti = billedsti;
    this._type = type;
    this._antalPåLager = antalPåLager;
  }

  // model
  get model() {
    return this._model;
  }

  set model(x) {
    this._model = x;
  }

  // pris
  get pris() {
    return this._pris;
  }

  set pris(x) {
    this._pris = x;
  }

  // farve
  get farve() {
    return this._farve;
  }

  set farve(x) {
    this._farve = x;
  }

  // størrelse
  get størrelse() {
    return this._størrelse;
  }

  set størrelse(x) {
    this._størrelse = x;
  }

  // sustainability
  get sustainability() {
    return this._sustainability;
  }

  set sustainability(x) {
    this._sustainability = x;
  }

  // billedsti
  get billedsti() {
    return this._billedsti;
  }

  set billedsti(x) {
    this._billedsti = x;
  }

  // type
  get type() {
    return this._type;
  }

  set type(x) {
    this._type = x;
  }

  // antalPåLager
  get antalPåLager() {
    return this._antalPåLager;
  }

  set antalPåLager(x) {
    this._antalPåLager = x;
  }
}
