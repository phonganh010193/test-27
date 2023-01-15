import httpClient from "../../utils/api"

const ProductApi = {
    getProduct: () => {
        return httpClient.get('products');
    }
}

export default ProductApi;
