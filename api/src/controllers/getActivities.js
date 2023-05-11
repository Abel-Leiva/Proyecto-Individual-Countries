const { Activity } = require("../db");

const getActivity = async (req, res) => {
  try {
    const response = await Activity.findAll();
    return res.status(200).json(response);
  } catch (error) {
    console.log({ errorgetActivities: error.message });
  }
};
module.exports = { getActivity };
