import httpClientCart from "../../utils/cartApi"

const CartApi = {
    getListCart: () => {
        return httpClientCart.get('cart');
    },
    updateListCart: (value) => {
        return httpClientCart.post('cart', value)
    },
    deleteCart: (id) => {
        return httpClientCart.delete('cart' + id)
    },

    getListBlog: () => {
        return httpClientCart.get('blog');
    }
}

export default CartApi;
