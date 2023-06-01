const validate = (form) => {
  let objError = {};
  if (!form.name) {
    objError.nombre = "Debe ingresar nombre de la actividad";
  }
  if (!form.difficulty || typeof form.difficulty !== "string") {
    objError.dificultad = "Debe seleccionar nivel de dificultad";
  }
  if (form.duration < 1) {
    objError.duracion = "Debe elegir tiempo de duración";
  }
  if (!form.season) {
    objError.temporada = "Debe Seleccionar temporada";
  }
  if (form.countries.length === 0) {
    objError.paises = "Debe seleccionar al menos un país";
  }

  return objError;
};
export default validate;
