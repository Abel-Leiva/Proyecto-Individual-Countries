const { Country } = require("../db");
const axios = require("axios");

const loadCountriesToDatabase = async () => {
  try {
    const response = await axios.get(`https://restcountries.com/v3/all`);
    const countries = response.data;
    //esta funcion hay que refactorizar, no hace ningun get solo carga en la base de datos los paises
    // Creo un array de promesas que verifica y crea cada país
    const promises = countries.map(async (country) => {
      const [instance, created] = await Country.findOrCreate({
        where: { id: country.cca3 },
        defaults: {
          name: country.name.common,
          imageFlag: country.flags[1],
          continent: country.continents?.join(", "),
          capital: country.capital ? country.capital.join(", ") : "no tiene",
          subRegion: country.subregion,
          area: country.area,
          population: country.population,
        },
      });
      return instance.toJSON();
    });

    // Esperamos a que se completen todas las promesas
    const createdCountries = await Promise.all(promises);
  } catch (error) {
    console.log({ loadCountriesError: error.message });
  }
};

module.exports = {
  loadCountriesToDatabase,
};

// const { Country } = require("../db");
// const axios = require("axios");
// const loadCountriesToDatabase = async (req, res) => {
//   try {
//     const response = await axios
//       .get(`https://restcountries.com/v3/all`)
//       .then((res) => res.data);
//     let arr = response.map((e) => {
//       return {
//         id: e.cca3,
//         name: e.name.common,
//         imageFlag: e.flags[0],
//         continent: e.continents?.join(", "),
//         capital: e.capital ? e.capital.join(", ") : "no tiene",
//         subRegion: e.subregion,
//         area: e.area,
//         population: e.population,
//       };
//     });
//     await Country.bulkCreate(arr);

//     return res?.status(200).json(arr);
//   } catch (error) {
//     console.log({ loadCountriesError: error.message });
//   }
// };
// module.exports = {
//   loadCountriesToDatabase,
// };
