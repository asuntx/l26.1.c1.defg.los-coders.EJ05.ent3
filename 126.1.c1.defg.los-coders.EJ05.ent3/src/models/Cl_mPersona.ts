export default class Cl_mPersona {
  private _nombre: string = "";
  private _edad: number = 0;
  private _peso: number = 0;

  constructor(
    { nombre, edad, peso}: { nombre: string; edad: number; peso:number } = {
      nombre: "",
      edad: 0,
      peso: 0,
    },
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get nombre(): string {
    return this._nombre;
  }
  set edad(edad: number) {
    this._edad = +edad;
  }
  get edad(): number {
    return this._edad;
  }

  set peso(peso: number) {
    this._peso = +peso;
  }
  get peso(): number {
    return this._peso;
  }
}
