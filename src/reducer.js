export const initialState = {
    cart : [

    ],

    product : null,
    user : null
}


 const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART" :
            return {
                ...state,
                cart : [...state.cart, action.item]
            }
           

        case "SELECTED_PRODUCT":
            return{
                ...state,
                product : action.productDetails
            }

        case "REMOVE_FROM_CART":
            const newCart = state.cart;
            const index = state.cart.findIndex((item) => (

                item.id  === action.id
            )
            )
            if(index>=0){
                newCart.splice(index,1)
            }else{
                console.warn('cant remove')
            }
            return {
                ...state,
                cart : newCart
            }

        case "SET_USER":
            return {
                ...state,
                user : action.user
            }
            

        default :
            return state;
    }
}

export {reducer}