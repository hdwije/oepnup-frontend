import axiosInstance from '../configs/axios.config';

export const getAvailabilities = async (psychologistsId: number) => {
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

export const addAvailability = async ({
  psychologistsId,
  from,
  to,
}: {
  psychologistsId: number;
  from: string;
  to: string;
}) => {
  try {
    const response = await axiosInstance.post(
      `/psychologists/${psychologistsId}/available-timeslots`,
      { from, to },
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching client data', error);
    return [];
  }
};
