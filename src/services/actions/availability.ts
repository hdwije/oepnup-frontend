import axiosInstance from '../configs/axios.config';

export const getClientData = async (psychologistsId: number) => {
  try {
    const response = await axiosInstance.get(
      `/psychologists/${psychologistsId}/available-timeslots`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching client data', error);
    return [];
  }
};
