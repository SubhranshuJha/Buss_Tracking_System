import axios from "axios";

const API = "http://localhost:5173/api/buses";

export const getBuses = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const getBusByNumber = async (number) => {
  const res = await axios.get(`${API}/number/${number}`);
  return res.data;
};
