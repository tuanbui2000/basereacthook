
const initState = {
    products: [
        { id: 1, name: "vay", size: "S", color: "red", brand: "tún brand", price: "123", quantity: 1 },
        { id: 2, name: "skirt", size: "M", color: "blue", brand: "tún brand", price: "23", quantity: 3 },
        { id: 3, name: "dress", size: "L", color: "white", brand: "tún brand", price: "3423", quantity: 2 },
        { id: 4, name: "jean", size: "XL", color: "redrum", brand: "tún brand", price: "123", quantity: 4 }
    ],
    posts: []
}
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case "DELETE_ITEM_CART":
            const productIdToDelete = action.payload?.productId;
            const updatedProducts = state.products.filter(product => product.id !== productIdToDelete);

            console.log("check state", updatedProducts);
            return {
                ...state,
                products: updatedProducts
            };
        case "UPDATE_ITEM_CART":
            let toSetArray = [...state.products];
            toSetArray[action.payload.index].quantity = action.payload.quantity;

            return {
                ...state,
                products: toSetArray
            };



        default:
            return state;
    }

}
export default rootReducer;