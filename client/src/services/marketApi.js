import api from "./api";

export const getChart = async (symbol) => {
    const response = await api.get(`/market/chart/${symbol}`);
    return response.data.data;
};