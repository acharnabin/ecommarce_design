export const initialState={
    cart:[],
    productdetails:[],
};

export const Reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'add-to-cart':
            return{
                ...state,
                cart:[...state.cart,action.item],
            };
        case 'product-details':
            return{
                ...state,
                productdetails:[...state.productdetails,action.product],

            }
        
        
            default:
                return state;
        }

};

export const get_cart_total=(cart)=>cart?.reduce(
    (ammount,item)=>(item.price+ammount),0);