import axios from "axios";


const httpClient = axios.create({
  baseURL: 'https://63bff7b40cc56e5fb0e376ed.mockapi.io/',
  headers: {
    'Content-Type': 'application/json'
}
});

export default httpClient;