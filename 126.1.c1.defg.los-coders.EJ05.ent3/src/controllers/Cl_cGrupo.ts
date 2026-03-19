// Sea el nombre y la edad de varias personas.
// Se necesita un programa que lea estos datos y reporte
// al final el porcentaje de personas que son mayores de edad.
// Se tienen las siguientes personas: Luis (15), Ana (19),
//  José (21), Carmen (17), Rosa (18), José (22), María (17),
// Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16);
// la salida requerida presenta el siguiente formato:
// Cantidad de personas: 12
// Cantidad de personas mayor de edad: 7
// Porcentaje de personas mayor de edad: 58.33%

import Cl_mGrupo from "../models/Cl_mGrupo.js";
import Cl_vGrupo from "../views/Cl_vGrupo.js";
import Cl_cPersona from "./Cl_cPersona.js";

export default class Cl_cGrupo {
  private mGrupo: Cl_mGrupo = new Cl_mGrupo();
  private vGrupo: Cl_vGrupo = new Cl_vGrupo();

  constructor() {
    this.vGrupo.btProcesarPersona.onclick = () => this.procesarPersona();
  }

  procesarPersona(): void {
    new Cl_cPersona({
      callback: (persona) => {
        if (persona) {
          this.mGrupo.procesarPersona(persona);
          // Actualizando la vista solo pasando el contenedor grupo
          this.vGrupo.reportar({ grupo: this.mGrupo });
        }
      },
    });
  }
}
