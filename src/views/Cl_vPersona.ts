export default class Cl_vPersona {
  inNombre: HTMLInputElement;
  inEdad: HTMLInputElement;
  inPeso: HTMLInputElement
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("persona") as HTMLElement;
    this.inNombre = document.getElementById(
      "persona_inNombre",
    ) as HTMLInputElement;
    this.inEdad = document.getElementById("persona_inEdad") as HTMLInputElement;
    this.inPeso = document.getElementById("persona_inPeso") as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "persona_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "persona_btAceptar",
    ) as HTMLButtonElement;
    this.mostrar();
  }

  get nombre(): string {
    return this.inNombre.value;
  }
  get edad(): number {
    return +this.inEdad.value;
  }


  get peso(): number {
    return +this.inPeso.value
  }
  mostrar(): void {
    if (this.vista !== null) this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista !== null) this.vista.hidden = true;
  }
}
