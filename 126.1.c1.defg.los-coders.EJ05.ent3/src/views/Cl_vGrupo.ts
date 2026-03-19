import Cl_mGrupo from "../models/Cl_mGrupo.js";

export default class Cl_vGrupo {
  lblContPersonas: HTMLElement;
  lblContMayores: HTMLElement;
  lblPorcentajeMayores: HTMLElement;
  lblPromedioPeso: HTMLElement;
  btProcesarPersona: HTMLButtonElement;

  constructor() {
    this.lblContPersonas = document.getElementById(
      "body_lblContPersonas",
    ) as HTMLElement;
    this.lblContMayores = document.getElementById(
      "body_lblContMayores",
    ) as HTMLElement;
    this.lblPorcentajeMayores = document.getElementById(
      "body_lblPorcentajeMayores",
    ) as HTMLElement;
    this.lblPromedioPeso = document.getElementById(
      "body_lblPromedioPeso",
    ) as HTMLElement;
    this.btProcesarPersona = document.getElementById(
      "body_btProcesarPersona",
    ) as HTMLButtonElement;
  }

  reportar({ grupo }: { grupo: Cl_mGrupo }): void {
    this.lblContPersonas!.innerHTML = `${grupo.cantidadPer}`;
    this.lblContMayores!.innerHTML = `${grupo.cantidadMa}`;
    this.lblPorcentajeMayores!.innerHTML = `${grupo.porcentajeMa.toFixed(2)}`;
    this.lblPromedioPeso!.innerHTML = `${grupo.promedioPeso.toFixed(2)}`;
  }
}
