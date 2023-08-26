import axios from 'axios';

const apiUrl = "https://api.db-ip.com/v2/free/self"
export const  getFreeSelf = async () => {
  try {
    const response = await axios.get(`${apiUrl}/data`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from the API');
  }
};
