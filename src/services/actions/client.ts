import axiosInstance from '../configs/axios.config';

export const getClientData = async () => {
  try {
    const response = await axiosInstance.get('/clients');
    return response.data;
  } catch (error) {
    console.error('Error fetching client data', error);
    return [];
  }
};
