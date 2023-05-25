const { Activity, Country } = require("../db");

const getActivity = async (req, res) => {
  try {
    const response = await Activity.findAll({
      include: [{ model: Country, through: { attributes: [] } }],
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log({ errorgetActivities: error.message });
  }
};

module.exports = { getActivity };
// const { Activity, Country } = require("../db");

// const getActivity = async (req, res) => {
//   try {
//     const response = await Activity.findAll({
//       include: { model: Country, attributes: ["name"] },
//       through: { attributes: [] },
//     });
//     return res.status(200).json(response);
//   } catch (error) {
//     console.log({ errorgetActivities: error.message });
//   }
// };
// module.exports = { getActivity };
