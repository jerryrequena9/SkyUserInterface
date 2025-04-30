const API_KEY = 'pk_live_795ae782fe3ed0d8397bdf16c36b45d7';
const BASE_URL = "https://partners.every.org/v0.2";
const API_KEY2 = 'pk_live_ade428496c013d12b7f1c6bd19e0c1b6';

export const getPopularNonprofits = async (page = 1, pageSize = 10) => {
    const response = await fetch(`${BASE_URL}/browse/aapi-led?apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`);
    const data = await response.json();
    //console.log(data);
    return (data);
}

export const searchNonprofits = async (query, page = 1, pageSize = 10) => {
    const response = await fetch(`${BASE_URL}/search/${query}?apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`);
    const data = await response.json();
    console.log(data);

    return (data);
}