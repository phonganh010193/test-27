
import axios from "axios";


const httpClientCart = axios.create({
  baseURL: 'https://63c16cae376b9b2e647b40ad.mockapi.io/',
  headers: {
    'Content-Type': 'application/json'
}
});

export default httpClientCart;