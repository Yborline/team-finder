import api from "./api";

export const postGoogleAuth = async (route: string) => {
  try {
    const response = await api.get(route);
    return response.data;
  } catch (error) {
    console.log(`Error`, error);
    throw error;
  }
};
