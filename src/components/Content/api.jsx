import httpClient from "../../utils/api"


const CatagoriesApi = {
    getCatagories: () => {
        return httpClient.get('catagories')
    }
}

export default CatagoriesApi;
