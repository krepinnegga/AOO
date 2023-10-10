import axios from "axios";

const baseURl = "";

export const PostData = async (formData) => {
   try {
    const res = await axios.post(`${baseURl}`, {...formData})
    return res.data;
   } catch (err) {
      return null
   }
};