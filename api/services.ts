import apiClient from "./apiClient";

export const fetchLatestMessages = async () => {
  try {
    const response = await apiClient.get("/messages/latest");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllParticipants = async () => {
  try {
    const response = await apiClient.get("/participants/all");
    return response.data;
  } catch (error) {
    throw error;
  }
};
