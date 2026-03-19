import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mGrupo {
  private cntPer: number = 0;
  private cntMa: number = 0;
  private acmPeso: number = 0;

  procesarPersona(p: Cl_mPersona): void {
    this.cntPer++;
    this.acmPeso += p.peso;
    // Condición de mayoría de edad (>= 18)
    if (p.edad >= 18) {
      this.cntMa++;
    }
  }

  get cantidadPer(): number {
    return this.cntPer;
  }
  get cantidadMa(): number {
    return this.cntMa;
  }
  get porcentajeMa(): number {
    if (this.cntPer === 0) return 0;
    return (this.cntMa / this.cntPer) * 100;
  }

  get promedioPeso(): number {
    if (this.cntPer > 0) {
      return this.acmPeso / this.cntPer;
    }
    return 0;
  }
}
