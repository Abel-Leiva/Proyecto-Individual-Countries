const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const getAllCountries = async (req, res) => {
  const { id } = req.params;
  const { name } = req.query;
  let countries;
  try {
    // Si se proporciona un ID en los parámetros, filtrar por ID
    if (id) {
      countries = await Country.findByPk(id, {
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: { attributes: [] }, // para evitar incluir la tabla pivot
        },
      });
    }
    // Si se proporciona un nombre en la consulta, filtrar por nombre
    else if (name) {
      countries = await Country.findAll({
        where: {
          name: {
            //revisar arreglar lo del post en minusculas
            [Op.iLike]: `%${name}%`,
          },
        },
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: { attributes: [] }, // para evitar incluir tabla intermedia
        },
      });
    }
    // Si no se proporcionan parámetros de filtro, obtener todos los países
    else {
      countries = await Country.findAll({
        attributes: ["name", "imageFlag", "continent", "id"],
        // include: {
        //   model: Activity,
        //   attributes: ["name"],
        //   through: { attributes: [] }, // para evitar incluir la tabla pivot
        // },
      });
    }
    console.log(countries?.length);
    res.status(200).json(countries);
  } catch (error) {
    console.log({ getallCountrie: error });
  }
};

module.exports = { getAllCountries };

// const { Country, Activity } = require("../db");

// const getAllCountries = async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.query;
//   try {
//     let countries;

//     // Si se proporciona un ID en los parámetros, filtrar por ID
//     if (id) {
//       countries = await Country.findByPk({
//         include: {
//           model: Activity,
//           attributes: ["name"],
//           through: { attributes: [] }, // para evitar incluir la tabla pivot
//         },
//       });
//     }
//     // Si se proporciona un nombre en la consulta, filtrar por nombre
//     if (name) {
//       countries = await Country.findAll({
//         include: {
//           model: Activity,
//           attributes: ["name"],
//           through: { attributes: [] }, // para evitar incluir la tabla pivot
//         },
//       });
//     }
//     // Si no se proporcionan parámetros de filtro, obtener todos los países
//     if (!name && !id) {
//       countries = await Country.findAll({
//         include: {
//           model: Activity,
//           attributes: ["name"],
//           through: { attributes: [] }, // para evitar incluir la tabla pivot
//         },
//       });
//     }

//     res.status(200).json(countries);
//   } catch (error) {
//     console.log({ getallCountrie: error });
//   }
// };

// module.exports = { getAllCountries };
// const { Country } = require("../db");
// const getAllCountries = async (req, res) => {
//   try {
//     const response = await Country.findAll();
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
// module.exports = { getAllCountries };
